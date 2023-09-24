import { useContext } from "react";
import { ItemContext } from "../../context/ItemProvider";
import Item from "./Item";

const ItemList = () => {
  const { ItemsList, selectedBrand } = useContext(ItemContext);
  // console.log(ItemsList);
  return (
    <>
      <div className="flex flex-wrap gap-[1.3%] w-[90%] gap-y-3 py-2 mx-auto">
        {selectedBrand === "All"
          ? ItemsList.map((item) => <Item item={item} key={item.id} />)
          : ItemsList.map((item) => {
              if (item.brand === selectedBrand) {
                return <Item item={item} key={item.id} />;
              }
              return null; // Render nothing for items with other brands
            })}
      </div>
    </>
  );
};

export default ItemList;
