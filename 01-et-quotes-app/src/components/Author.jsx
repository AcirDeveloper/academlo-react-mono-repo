import React, { useState } from 'react'

const Author = ({ aut, index, onSelectNextQuote, tint }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleShowTooltip = () => {
    setShowTooltip(true)
  }

  const handleHideTooltip = () => {
    setShowTooltip(false)
  }

  return (
    <div style={{ color: tint }}>
      <p className='author'>
        <div style={{ display: 'flex', gap: '5px' }}>
          <span style={{ fontSize: '18px' }}>✒️</span>
          <span className='autor_name'>{aut[index].author}</span>
        </div>
        <button
          onClick={onSelectNextQuote}
          onMouseEnter={handleShowTooltip}
          onMouseLeave={handleHideTooltip}
          style={{ color: tint }}
          className='autor_btn tooltip-container'
        >
          <i className='fa-solid fa-sync'></i>
          {showTooltip && (
            <div className='tooltip-text' style={{ color: tint }}>
              Next Appointment
            </div>
          )}
        </button>
      </p>
    </div>
  )
}

export default Author
