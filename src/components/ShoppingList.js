import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

   const [category, selectedCategory] = useState("All")

   const filteredCategory = items.filter(cat =>{
    if(category === "All") return true;
    return cat.category.includes(category)
   })

   

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={category} onChange={e=> selectedCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredCategory.map((item) => (
          <Item key={item.id} name={item.name} category={filteredCategory.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
