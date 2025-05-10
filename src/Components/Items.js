export default function Items({ item, onDeleteItems, onToggleItems }) {
  return (
    <li className={`item ${item.packed ? "packed" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItems(item.id)}
        />
        <span>
          {item.howMany} × {item.name}
        </span>
      </label>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
