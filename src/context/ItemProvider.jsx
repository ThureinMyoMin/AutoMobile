/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import Items from "./Items.json";

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [ItemsList, setItemsList] = useState([]);
  const [brands, setBrands] = useState(["All"]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  useEffect(() => {
    setItemsList(Items);

    const uniqueBrands = Array.from(
      new Set(ItemsList.map((item) => item.brand))
    );
    setBrands(["All", ...uniqueBrands]);
  }, [ItemsList]);

  return (
    <ItemContext.Provider
      value={{ ItemsList, brands, selectedBrand, setSelectedBrand }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
