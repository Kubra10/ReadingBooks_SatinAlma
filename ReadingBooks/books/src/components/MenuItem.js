import React from 'react';

const MenuItem = ({ image, name, content, price }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: '200px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <h2>{name}</h2>
      <p>{content}</p>
      <p>{price} TL</p>
    </div>
  );
};

export default MenuItem;
