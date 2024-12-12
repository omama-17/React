import styles from "./Item.module.css";

const Item = ({ items }) => {
  const handleBuyButtonClicked = (items) => {
    console.log(`${items} being bought`);
  };
  return (
    <>
      <li key={items} className="list-group-item">
        {items}
        <button
          className={`${styles.button} btn btn-info`}
          onClick={() => handleBuyButtonClicked(items)}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
