import React from 'react'
import image from '../assets/fondo3.jpg'

const Header = () => {
  return (
    <div>
      <header className='header_img'>
        <img className='img' src={image} alt='imge' />
      </header>
    </div>
  )
}

export default Header
