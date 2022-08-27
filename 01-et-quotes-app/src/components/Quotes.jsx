import React from 'react'
import { useState } from 'react'

const Quotes = ({ quo, index }) => {
	return (
		<div>
			<p>
				<span>
					<i class='fa-solid fa-quote-left'></i>
				</span>
				{quo[index].quote}
			</p>
		</div>
	)
}

export default Quotes
