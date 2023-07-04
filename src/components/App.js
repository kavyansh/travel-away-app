import { useState } from "react";

import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleOnClearItems() {
    setItems([]);
  }
  return (
    <div className="container">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearItems={handleOnClearItems}
      />
      <Footer items={items} />
    </div>
  );
}
