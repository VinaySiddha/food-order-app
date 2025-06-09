from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List
from backend import models, schemas, database
from bson import ObjectId
import json

router = APIRouter()


@router.get("/menu")
async def get_menu():
    menu_items = list(database.database["menu_items"].find())
    for item in menu_items:
        item["_id"] = str(item["_id"])
    return menu_items


@router.post("/menu")
async def add_menu_item(item: schemas.MenuItemCreate):
    try:
        menu_item = models.MenuItem(**item.dict())
        result = database.database["menu_items"].insert_one(menu_item.to_dict())
        if result.inserted_id:
            return {"message": "Menu item added successfully", "id": str(result.inserted_id)}
        else:
            raise HTTPException(status_code=500, detail="Failed to add menu item")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/menu/category/{category_name}")
async def get_items_by_category(category_name: str):
    items = list(database.database["menu"].find({"category": category_name}))
    for item in items:
        item["_id"] = str(item["_id"])  # Convert ObjectId to string for JSON serialization
    return items
