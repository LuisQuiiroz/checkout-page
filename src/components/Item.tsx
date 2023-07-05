import { useState } from "react";
import { formatAmount } from "../utils/utils";

export interface ItemProps {
  id: number;
  name: string;
  originalPrice: number;
  price: number;
  amount: number;
  urlImg: string;
}

interface Props {
  item: ItemProps;
  handleQuantityChange: (id: number, quantity: number) => void;
}
export const Item: React.FC<Props> = ({ item, handleQuantityChange }) => {

  const { name, originalPrice, price, amount, urlImg } = item;

  const [quantity, setQuantity] = useState<number>(amount);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    handleQuantityChange(item.id, newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newquantity = quantity - 1;
      setQuantity(newquantity);
      handleQuantityChange(item.id, newquantity);
    }
  };

  const total = quantity * price;

  return (
    <div className="flex gap-4 lg:gap-6 pb-8">
      <div className="w-5/12 md:w-1/2">
        <img className="w-full rounded-xl" src={urlImg} alt={name} />
      </div>
      <div className="w-7/12 md:w-1/2 flex flex-col justify-between">
        <div>
          <p className="text-gray-4 text-xs lg:text-base font-bold">{name}</p>
          <div className="flex gap-4 pt-2 py-4">
            <p className="text-orange-1 text-sm lg:text-base font-bold">
              {formatAmount(price)}
            </p>
            <p className="text-gray-4 text-2xs lg:text-xs font-bold line-through">
              {formatAmount(originalPrice)}
            </p>
          </div>
        </div>
        <div
          className="flex justify-between items-center border rounded-xl border-gray-3 p-3 md:p-2 text-base max-w-[130px]"
        >
          <button
            onClick={handleDecrease}
            className="text-gray-2 bg-gray-5 p-1 rounded w-4 h-4 flex items-center justify-center"
            id="decrement">-</button>
          <p className="font-bold" id="count">{quantity}</p>
          <button
            onClick={handleIncrease}
            className="text-gray-2 bg-gray-5 p-1 rounded w-4 h-4 flex items-center justify-center"
            id="increment">+</button>
        </div>
      </div>
    </div>
  )
}