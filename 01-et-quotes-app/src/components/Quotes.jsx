import React from 'react'

const Quotes = ({ quo, index, tint }) => {
  return (
    <div style={{ color: tint }}>
      <div className='d-flex'>
        <div className='quote'>
          <i className='fa-solid fa-quote-left'></i>
          <p>{quo[index].quote}</p>
        </div>
      </div>
    </div>
  )
}

export default Quotes
