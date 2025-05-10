import Header from "./Header";
import PackingList from "./PackingList";
import Footer from "./Footer";
import MForm from "./MForm";
import ConfirmModal from "./ConfirmModal";
import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });

  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    setShowConfirm(true);
  }

  function handleConfirm() {
    setItems([]);
    localStorage.removeItem("items");
    setShowConfirm(false);
  }

  function handleCancel() {
    setShowConfirm(false);
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <MForm onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItems={handleDeleteItems}
          onToggleItems={handleToggleItems}
          clearList={clearList}
        />
      </main>
      <Footer items={items} />
      {showConfirm && (
        <ConfirmModal
          message="Are you sure you want to delete all items?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}
