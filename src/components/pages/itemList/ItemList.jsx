import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div>
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} isInItemList={true} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
