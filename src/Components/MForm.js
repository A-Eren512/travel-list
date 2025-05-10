import Form from "./Form";


export default function MForm({ onAddItems }) {
  return (
    <div className="form-container">
      <div className="form-image-wrapper">
        <img src="/images/travel.jpg" alt="travel" className="form-image" />
      </div>
      <Form onAddItems={onAddItems} />
    </div>
  );
}
