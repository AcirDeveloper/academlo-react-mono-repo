import React from 'react'
import { useState } from 'react'

const Quotes = ({ quo, index, tint }) => {
	return (
		<div style={{ color: tint }}>
			<div className='d-flex'>
				<div className='quote'>
					<span>
						<i className='fa-solid fa-quote-left'></i>
					</span>
					<p>{quo[index].quote}</p>
				</div>
			</div>
		</div>
	)
}

export default Quotes
