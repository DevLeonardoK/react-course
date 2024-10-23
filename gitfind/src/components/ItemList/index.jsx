import "./styles.css";

function ItemList({ title, description }) {
  return (
    <>
      <div className="item-list">
        <strong>{title}</strong>
        <p>{description}</p>
        <hr></hr>
      </div>
    </>
  );
}
export default ItemList;
