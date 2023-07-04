import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onToggleItem,
  onDeleteItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let finalItems = [];

  if (sortBy === "input") {
    finalItems = items;
  } else if (sortBy === "description") {
    finalItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    finalItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="packing-list">
      <ul>
        {finalItems.map((item) => (
          <li key={item.id}>
            <Item
              item={item}
              onToggleItem={onToggleItem}
              onDeleteItem={onDeleteItem}
            ></Item>
          </li>
        ))}
      </ul>
      <div className="filter-container">
        <div className="filters">
          <select
            className="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">SORT BY INPUT ORDER</option>
            <option value="description">SORT BY DESCRIPTION</option>
            <option value="packed">SORT BY PACKED STATUS</option>
          </select>
          <button onClick={onClearItems}>Clear List</button>
        </div>
      </div>
    </div>
  );
}
