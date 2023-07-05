import { useEffect, useState } from "react";
import { formatAmount } from "../utils/utils";
import { Item, type ItemProps } from "./Item";

export const Items = () => {
    let data: ItemProps[] = [
    {
      id: 1,
      name: "Vintage Backbag",
      originalPrice: 94.99,
      price: 54.99,
      amount: 1,
      urlImg: "/photo1.png",
    },
    {
      id: 2,
      name: "Levi Shoes",
      originalPrice: 124.99,
      price: 74.99,
      amount: 1,
      urlImg: "/photo2.png",
    },
  ];

  const shipping = 19;
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    calculateTotal();
  }, []);

  const calculateTotal = () => {
    const totalPrice = data.reduce((acc, item) => acc + item.price * item.amount, 0);
    setTotal(totalPrice + shipping);
  }


  const handleQuantityChange = (id: number, newQuantity: number) => {
    const newQuantityList = [...data];
    newQuantityList.forEach((item) => {
      if (item.id === id) {
        item.amount = newQuantity;
      }
    })
    data = newQuantityList;
    calculateTotal();
  };
  

  return (
    <div className="p-6 lg:p-8 bg-gray-6 rounded-xl">
      {data.map((item) => (
        <Item item={item} handleQuantityChange={handleQuantityChange} key={item.name} />
      ))}
      <div className="pt-14 lg:pt-16 w-full">
        <div
          className="flex py-2 border-y border-gray-5 justify-between text-gray-1 text-sm lg:text-xl font-bold"
        >
          <p>Shipping</p>
          <p>{formatAmount(shipping)}</p>
        </div>
      </div>
      <div>
        <div
          className="flex pt-2 justify-between text-gray-1 text-sm lg:text-xl font-bold"
        >
          <p>Total</p>
          <p id="total-price">{formatAmount(total)}</p>
        </div>
      </div>
    </div>

  )
}
