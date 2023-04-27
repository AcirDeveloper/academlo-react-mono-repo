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
        <span className='autor_name'>{aut[index].author}</span>
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
