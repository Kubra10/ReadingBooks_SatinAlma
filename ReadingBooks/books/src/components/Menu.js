import MenuItem from '../components/MenuItem';
import React from 'react';
import { Data } from '../helpers/Data';
import { useNavigate } from 'react-router-dom'; // useNavigate'ı ekledik
import '../styles/Menu.css';

export const Menu = () => {
  const navigate = useNavigate(); // navigate fonksiyonunu oluşturduk

  const handlePurchaseClick = () => {
    navigate('/contact'); // "Satın Al" butonuna tıklandığında iletişim sayfasına yönlendir
  };

  return (
    <div className='menu'>
      <h1 className='menuTitle'>Kitaplarımız</h1>
      <div className='menuList'>
        {Data.map((menuItem, key) => {
          return (
            <div className='menuItem' key={key}>
              <MenuItem
                image={menuItem.image}
                name={menuItem.name}
                content={menuItem.content}
                price={menuItem.price}
              />
              <button className='purchaseButton' onClick={handlePurchaseClick}>Satın Al</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
