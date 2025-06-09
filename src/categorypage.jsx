import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/menu/category/${categoryName}`)
      .then(res => res.json())
      .then(data => setItems(data));
  }, [categoryName]);

  return (
    <div>
      <h2>{categoryName} Items</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>Price: ₹{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;