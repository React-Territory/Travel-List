function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
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

      <select className="rounded" style={{ outline: "none" }}>
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

export default Form;
