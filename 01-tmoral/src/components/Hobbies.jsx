import React from 'react'

const Hobbies = ({ card }) => {
	return (
		<div className='card'>
			<h1>{card[1].title}</h1>
			<ul>
				<li>{card[1].item1}</li>
				<li>{card[1].item2}</li>
				<li>{card[1].item3}</li>
			</ul>
		</div>
	)
}

export default Hobbies
