import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import users from './users.json'

function App() {
	const [index, setCount] = useState(0)

	const random = () => {
		setCount(Math.floor(Math.random() * users.length))
	}

	/* const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871', '#B39CD0']
	const randomColor = Math.floor(Math.random() * colors.length) */
	/* document.body.style = `background: ${colors[randomColor]}` */

	/* Otra manera de hacer los colores random */
	let makingColorCode = '0123456789ABCDEF'
	let finalCode = '#'
	for (let counter = 0; counter < 6; counter++) {
		finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)]
	}

	/* const myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16) */
	document.body.style = `background: ${finalCode}`

	console.log(users)

	return (
		<div className='App' style={{ color: finalCode }}>
			<h2>
				<b>
					{users[index].name.title + ' ' + users[index].name.first + ' ' + users[index].name.last}
				</b>
			</h2>
			<h2>{users[index].gender}</h2>
			<img
				src={users[index].picture.large}
				alt={users[index].name.title + ' ' + users[index].name.first + ' ' + users[index].name.last}
			/>
			<ul>
				<li>
					<i className='fa-solid fa-envelope'></i>
					{' ' + users[index].email}
				</li>
				<li>
					<i className='fa-solid fa-earth-africa'></i> {' ' + users[index].location.country}
				</li>
				<li>
					<i className='fa-solid fa-phone'></i> {' ' + users[index].phone}
				</li>
			</ul>
			<button onClick={random} style={{ backgroundColor: finalCode }}>
				<i className='fa-solid fa-shuffle'></i>
			</button>
		</div>
	)
}

export default App
