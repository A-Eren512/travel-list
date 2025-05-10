import { useState } from "react";
import Items from "./Items";

export default function PackingList({ items, onDeleteItems, onToggleItems, clearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = items;

  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="packing-list">
      <ul className="item-list">
        {sortedItems.map((item) => (
          <Items
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      {items.length > 0 && (
        <div className="controls">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="name">Sort by name</option>
            <option value="packed">Sort by packed status</option>
          </select>

          <button onClick={clearList}>Clear List</button>
        </div>
      )}
    </div>
  );
}
