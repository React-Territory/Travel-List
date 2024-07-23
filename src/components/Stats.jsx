import React from "react";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="font-semibold px-8 py-2 text-xl flex justify-center">
        <em>Start adding some items to your packing list 📝</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer
      className="font-semibold px-8 py-2 text-xl flex justify-center"
      style={{ background: "#a2c8cc27" }}
    >
      {percentage === 100 ? (
        <em> You got everything to go! 🏝</em>
      ) : (
        <em>
          You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
