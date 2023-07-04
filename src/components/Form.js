import { useState } from "react";

export default function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (description === null || description === "") return;

    const newItem = {
      quantity,
      description,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);
    setQuantity(1);
    setDescription("");
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="quantity">QUANTITY</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label htmlFor="description">DESCRIPTION</label>
        <input
          type="text"
          id="description"
          value={description}
          placeholder="Add item description... "
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button>Add</button>
    </form>
  );
}
