import React from 'react'

const Author = ({ aut, index, btn }) => {
	return (
		<div>
			<p>
				{aut[index].author} <br />{' '}
				<span>
					<button onClick={btn}>
						<i class='fa-solid fa-circle-chevron-right'></i>
					</button>
				</span>{' '}
			</p>
		</div>
	)
}

export default Author
