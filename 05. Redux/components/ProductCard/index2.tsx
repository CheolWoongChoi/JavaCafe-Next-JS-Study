import { useCallback, useContext } from "react";
import cartContext from "@/contexts/cartContext";

type Product = {
  id: string;
  name: string;
  picture: string;
  price: number;
};

function ProductCard({ id, name, price, picture }: Product) {
  const { setItems, items } = useContext(cartContext);

  // const productAmount = id in items ? items[id] : 0;
  const productAmount = items?.[id] ?? 0;

  // const handleIncrement = useCallback(() => {
  //   const cnt = items[id] ? items[id] + 1 : 1;

  //   setItems({
  //     ...items,
  //     [id]: cnt,
  //   });
  // }, []);

  // const handleDecrement = () => {
  //   const cnt = items[id] ? items[id] - 1 : 0;

  //   setItems({
  //     ...items,
  //     [id]: cnt,
  //   });
  // };

  const handleAmount = (action: "increment" | "decrement") => {
    if (action === "increment") {
      const newItemAmount = id in items ? items[id] + 1 : 1;
      setItems({ ...items, [id]: newItemAmount });
    }

    if (action === "decrement") {
      if (items?.[id] > 0) {
        setItems({ ...items, [id]: items[id] - 1 });
      }
    }
  };

  return (
    <div className="bg-gray-200 p-6 rounded-md">
      <div className="relative 100% h-40 m-auto">
        <img src={picture} alt={name} className="object-cover" />
      </div>
      <div className="flex justify-between mt-4">
        <div className="font-bold text-l"> {name} </div>
        <div className="font-bold text-l text-gray-500"> ${price} per kg </div>
      </div>
      <div className="flex justify-between mt-4 w-2/4 m-auto">
        <button
          className="pl-2 pr-2 bg-red-400 text-white rounded-md"
          disabled={productAmount === 0}
          // onClick={handleDecrement}
          onClick={() => handleAmount("decrement")}
        >
          -
        </button>
        <div>{productAmount}</div>
        <button
          className="pl-2 pr-2 bg-green-400 text-white rounded-md"
          // onClick={handleIncrement}
          onClick={() => handleAmount("increment")}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
