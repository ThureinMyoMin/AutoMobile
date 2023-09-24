import { useContext } from "react";
import { ItemContext } from "../../context/ItemProvider";

const Selector = () => {
  const { brands, setSelectedBrand } = useContext(ItemContext);
  return (
    <div className="w-[90%] mx-auto py-3 flex justify-between">
      <h1 className="text-white text-2xl">Auto Mobile</h1>
      <div>
        <select
          name="carBrand"
          id="carBrand"
          className="w-[8rem] bg-transparent text-white border-2 border-white p-1"
          // value={(e) => console.log(e.target.value)}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          {brands.map((brand) => {
            return (
              <option value={brand} key={brand} className="bg-slate-900">
                {brand}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Selector;
