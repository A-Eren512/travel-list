import { useState } from "react";

export default function Form({ onAddItems }) {
  const [name, setName] = useState("");
  const [howMany, setHowMany] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    onAddItems({
      name,
      howMany,
      packed: false,
      id: Date.now(),
    });
    setName("");
    setHowMany(1);
  }

  return (
    <form className="form-panel" onSubmit={handleSubmit}>
      <h2 className="form-title">What do you need for your ✈️ trip?</h2>
      <div className="form-fields">
        <input
          type="text"
          placeholder="Item..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          value={howMany}
          onChange={(e) => setHowMany(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
