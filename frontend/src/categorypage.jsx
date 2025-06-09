import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <div style={{ padding: 32 }}>
      <h1>Category: {categoryName}</h1>
      <p>This is the category page for <b>{categoryName}</b>.</p>
      {/* TODO: Render menu items for this category */}
    </div>
  );
};

export default CategoryPage;