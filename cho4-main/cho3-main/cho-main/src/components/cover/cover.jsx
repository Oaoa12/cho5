import React from 'react';
import './cover.css';

export const Cover = ({image = ""}) => {
  return (
    <div className='cover'>
      <img src={image} alt=" cover" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    </div>
  );
};
