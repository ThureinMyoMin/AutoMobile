/* eslint-disable react/prop-types */
import defaultImg from "../../assets/default.jpeg";
const Item = ({ item }) => {
  // console.log(item.brand);

  /*
    {
    "id": "35192c4f-2cff-5265-9b7c-307c71f36b62",
    "brand": "Ferrari",
    "model": "488 GTB",
    "year": 2023,
    "price_usd": 300000,
    "img_url": "",
    "horsepower": 661,
    "driven_km": 5000
  }, 
  */
  return (
    <div className="w-[24%]  p-2 border-2 shadow-md  rounder border-slate-700 rounded">
      <img
        src={item.img_url ? item.img_url : defaultImg}
        className="object-cover w-full border-2 border-slate-900 first-letter: h-[10rem] rounded shadow-sm  text-white"
        alt={item.brand + ", " + item.model}
      />
      <div className="p-1 text-white">
        <h2 className="my-1 text-lg flex max-xl:flex-col xl:justify-between  xl:items-end">
          {item.model} ({item.year})
          <span className="text-sm">{item.brand}</span>
        </h2>
        <hr className="border-white my-2 " />
        <p className="flex justify-between">
          Price: <span> ${item.price_usd.toLocaleString("en-US")} </span>
        </p>
        <p className="flex justify-between ">
          Horsepower: <span> {item.horsepower} HP </span>
        </p>
        <p className="flex justify-between ">
          Driven(KM): <span> {item.driven_km} KM </span>
        </p>
      </div>
    </div>
  );
};

export default Item;
