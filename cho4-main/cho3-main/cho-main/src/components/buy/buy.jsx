import './buy.css';
import { useDispatch, useSelector } from 'react-redux'; 
import React from 'react';
import { Button } from '../button';
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer';

export const Buy = ({ item: currentItem }) => { 
  const dispatch = useDispatch(); 
  const items = useSelector(state => state.cart.itemsInCart);
  
  
  const isItemInCart = items.some(cartItem => cartItem.id === currentItem.id);

  const handleClick = (e) => {
    e.stopPropagation();
    
    if (isItemInCart) {
      dispatch(deleteItemFromCart(currentItem.id)); 
    } else {
      dispatch(setItemInCart(currentItem)); 
    }
  };

  return (
    <div className='buy'>
      
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? 'Убрать из корзины' : 'В Корзину'}
      </Button>
    </div>
  );
};