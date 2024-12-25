import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './cart-block.css';
import { CartMenu } from '../cart-menu'; 
import { ItemsInCart } from '../items-in-cart'; 
import { IoCartOutline } from "react-icons/io5";
import { calcTotalPrice } from '../utilts';

export const CartBlock = () => {
  const [isCartMenuVisible, setInCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  return (
    <div className='cart-block'>
      <ItemsInCart quantity={items.length} />
      <IoCartOutline 
        size={25} 
        className='cart-block_icon' 
        onClick={() => setInCartMenuVisible(!isCartMenuVisible)} 
      />
      {totalPrice > 0 && <span className='cart-block_total-price'>{totalPrice} руб.</span>}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};
