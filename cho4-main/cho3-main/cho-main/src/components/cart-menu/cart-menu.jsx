import React from 'react';
import { Button } from '../button/button'; 
import './cart-menu.css';
import { calcTotalPrice } from '../utilts';

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className='cart-menu'>
      <div className='cart-menu__items-list'>
        {
          items.length > 0 
            ? items.map((item) => (
                <div key={item.id} className='cart-menu__item'>
                  {item.title}
                </div>
              )) 
            : 'Корзина пуста'
        }
      </div>
      {items.length > 0 && (
        <div className='cart-menu__arrange'>
          <div className='cart-menu__total-price'>
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Button type='primary' size='m' onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      )}
    </div>
  );
};