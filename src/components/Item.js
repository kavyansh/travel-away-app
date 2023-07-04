export default function Item({ item, onToggleItem, onDeleteItem }) {
  function handleCrossClick(e) {
    e.preventDefault();
    onDeleteItem(item.id);
  }

  return (
    <div className="item">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span className="quantity">{item.quantity}</span>
      <span
        className="description"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.description}
      </span>
      <a href="" className="cross" onClick={handleCrossClick}>
        x
      </a>
    </div>
  );
}
