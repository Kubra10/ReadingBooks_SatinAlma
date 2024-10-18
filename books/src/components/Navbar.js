import React from 'react'
import BooksLogo from '../assets/books-1.jpeg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={BooksLogo} alt=""/>
            <div className='mainLink'>
                <Link to="/">Anasayfa</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">Hakkımızda</Link>
                <Link to="/contact">İletişim</Link>
            </div>
        </div>
    </div>
  )
}
