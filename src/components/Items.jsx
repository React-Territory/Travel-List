function Items({ item }) {
  return (
    <li className="px-8 flex">
      <div style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span className="px-1 font-semibold">{item.quantity}</span>
        <span className="px-1">{item.descreption}</span>
      </div>
      <button>❌</button>
    </li>
  );
}

export default Items;
