export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="flex m-2">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <div style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span className="px-1 font-semibold">{item.quantity}</span>
        <span className="px-1">{item.descreption}</span>
      </div>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
