import { useState } from "react";

export default function Form({ onAddItems }) {
  const [descreption, setDescreption] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // guard clause
    if (!descreption) return;

    const newItem = { descreption, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescreption("");
    setQuantity(1);
  };

  return (
    <form
      className="px-8 py-2 flex justify-center gap-2 items-center"
      style={{ background: "#549198" }}
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl flex justify-center" style={{ color: "#fff" }}>
        What do you need for your trip? 👜{" "}
      </h3>

      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
        className="rounded"
        style={{ outline: "none" }}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className="p-2 rounded"
        style={{ outline: "none" }}
        type="text"
        placeholder="Item..."
        value={descreption}
        onChange={(e) => setDescreption(e.target.value)}
      />
      <button
        className="p-2 rounded font-semibold"
        style={{ background: "#fafbfa" }}
      >
        Add
      </button>
    </form>
  );
}
