import React from 'react'

const Author = ({ aut, index, btn, tint }) => {
	return (
		<div style={{ color: tint }}>
			<p>
				{aut[index].author} <br />{' '}
				<span>
					<button onClick={btn} style={{ color: tint }}>
						<i className='fa-solid fa-circle-chevron-right'></i>
					</button>
				</span>{' '}
			</p>
		</div>
	)
}

export default Author
