import React from 'react'
import BooksImage from '../assets/b-6.jfif'
import '../styles/About.css'

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop'
      style={{backgroundImage: `url(${BooksImage})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Kitap tutkunları için bir cennet yaratmak amacıyla yola çıktık! Biz, [Uygulama Adı], kitap severlerin aradığı her şeyi bulabileceği, keşfedebileceği ve keyifle okuyabileceği bir platform sunuyoruz. Amacımız, kitap okuma deneyiminizi en üst seviyeye çıkarmak ve her yaştan okuyucuya hitap eden geniş bir kitap yelpazesi sunmaktır. Misyonumuz, kitap okuma alışkanlığını yaygınlaştırmak ve herkesin kolayca erişebileceği bir kitap dünyası yaratmaktır. Teknolojinin gücünü kullanarak, kitapları parmaklarınızın ucuna getiriyoruz. İster klasikler, ister en yeni bestseller’lar olsun, her türden kitabı sizlerle buluşturuyoruz. Vizyonumuz, dünyanın dört bir yanındaki kitap severler için vazgeçilmez bir platform olmaktır. Kitap okuma kültürünü desteklemek ve zenginleştirmek için sürekli olarak kendimizi geliştiriyor ve yenilikçi çözümler sunuyoruz.</p>
      </div>
    </div>
  )
}

