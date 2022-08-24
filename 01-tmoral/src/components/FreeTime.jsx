import React from 'react'

export default function FreeTime({ card }) {
	return (
		<div className='card'>
			<h1>{card[2].title}</h1>
			<ul>
				<li>{card[2].item1}</li>
				<li>{card[2].item2}</li>
				<li>{card[2].item3}</li>
			</ul>
		</div>
	)
}
