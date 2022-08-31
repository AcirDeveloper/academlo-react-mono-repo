import React from 'react'
export default function Card({ background, title, item, item2, item3 }) {
	return (
		<div className='card2' style={{ background: background }}>
			<h1>{title}</h1>
			<ul>
				<li>{item}</li>
				<li>{item2}</li>
				<li>{item3}</li>
			</ul>
		</div>
	)
}
