import React from 'react';
import BooksImage from '../assets/b-5.jfif';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${BooksImage})` }}></div>
      <div className='rightSide'>
        <h1>Kitap Satın Almak İçin Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type='text' name='name' placeholder='Lütfen adınızı ve soyadınızı giriniz...' />
          <label>E-mail</label>
          <input type='email' name='email' placeholder='Lütfen e-mailinizi giriniz...' />
          <label>Mesajınız</label>
          <textarea rows='6' name='message' placeholder='Lütfen mesajınızı giriniz...'></textarea>
          <button type='submit'>Gönder</button> {/* Form gönderim butonu */}
        </form>
      </div>
    </div>
  );
};
