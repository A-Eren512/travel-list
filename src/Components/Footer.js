export default function Footer({ items }) {
  if (!items.length)
    return <footer className="footer">Start adding some items! 🚀</footer>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="footer">
      {percentage === 100 ? (
        <p>🌟 You got everything! Ready to go ✈️</p>
      ) : (
        <p>
          🧳 You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({percentage}%)
        </p>
      )}
    </footer>
  );
}
