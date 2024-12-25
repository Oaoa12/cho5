// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './product-detail.css';
import { Buy } from '../components/buy'; 

const PRODUCTS = [
    {
        image: '/covers/image_9.png',
        title: 'Ultimate Nutrition Prostar 100% Whey Protein, 908г Prostar 100%',
        price: 2240,
        id: 1,
        description: "Whey Protein – инновационный комплекс от производителя Ultimate Nutrition.",
      },
      {
        image: '/covers/113655030299.jpg',
        title: 'Протеин Optimum Nutrition Gold Standard Isolate (720 г) - Ваниль',
        price: 6699,
        id: 2,
        description: 'Gold Standard 100% Isolate— это изолят сывороточного протеина от компании Optimum Nutrition.'
      },
      {
        image: '/covers/113657940299.jpg',
        title: 'Протеин Optimum Nutrition Platinum HydroWhey (1590 г) - Турбо шоколад',
        price: 14099,
        id: 3,
        description: 'Platinum Hydrowhey от Optimum Nutrition — это самый современный сывороточный белок от ON.'
      },
      {
        image: '/covers/110880560299.jpg',
        title: 'Протеин Optimum System, 900 гр',
        price: 2999,
        id: 4,
        description: 'Optimum System 100% Whey protein — универсальный источник дополнительного белка.'
      },
      {
        image: '/covers/113656770299.jpg',
        title: 'Гейнер Mutant Mass (2270 г) - Печенье с кремом',
        price: 4399,
        id: 5,
        description: 'Mutant Mass, разработанный специально для самых сильных бодибилдеров и тяжелоатлетов.'
      },
      {
        image: '/covers/113655230299.jpg',
        title: 'Протеин BSN Syntha-6 (2270 г) - Клубника',
        price: 7139,
        id: 6,
        description: 'Syntha-6 — это многокомпонентная протеиновая пищевая добавка от известной компании BSN.'
      },
];

export const ProductDetail = () => {
    const { id } = useParams();
    const product = PRODUCTS.find(item => item.id === parseInt(id));

    return (
        <div className="product-detail">
            {product ? (
                <>
                    <img src={product.image} alt={product.title} />
                    <div className="details">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <span className="price">{product.price} ₽</span>
                        
                       
                            
                            <Buy item={product} />
                        
                    </div>
                </>
            ) : (
                <p className="not-found">Товар не найден.</p>
            )}
        </div>
    );
};