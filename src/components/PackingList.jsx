import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "descreption")
    sortedItems = items
      .slice()
      .sort((a, b) => a.descreption.localeCompare(b.descreption));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="h-screen flex justify-between flex-col items-center px-8 py-2 ">
      <ul className="flex flex-wrap w-full">
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div>
        <select
          value={sortBy}
          className="rounded p-1"
          style={{ background: "#549198", color: "#fff", outline: "none" }}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="descreption">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button
          onClick={onClearList}
          className="rounded p-1 mx-4"
          style={{ background: "#549198", color: "#fff" }}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
