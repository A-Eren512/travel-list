export default function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p className="modal-message">{message}</p>
        <div className="modal-buttons">
          <button className="modal-button confirm" onClick={onConfirm}>Yes</button>
          <button className="modal-button cancel" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}
