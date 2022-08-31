import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import users from './users.json'
import Ptacticeapis from './components/Ptacticeapis'
import Card from './components/Card'

function App() {
	const [index, setIndex] = useState(0)
	const [count, setCount] = useState(0)

	const random = () => {
		setIndex(Math.floor(Math.random() * users.length))
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
	/* document.body.style = `background: ${finalCode}` */

	console.log(users)

	const me = [
		{
			title: 'About me',
			item1: 'Julio',
			item2: 'Movie favorite: Your name',
			item3: 'Music favorite:  Flow',
		},
		{
			title: 'Hobbies',
			item1: 'Anime',
			item2: 'Soccer',
			item3: 'Leer',
		},
		{
			title: 'FreeTime',
			item1: 'Eat',
			item2: 'Soccer',
			item3: 'Read',
		},
		{
			title: 'Food',
			item1: 'Camarones',
			item2: 'Sushi',
			item3: 'Read',
		},
		{
			title: 'My stack',
			item1: 'HTML',
			item2: 'CSS',
			item3: 'Javascript',
		},
	]

	const title = () => alert('Sobre mí')

	return (
		<>
			<section className='RandomUsers' style={{ background: finalCode }}>
				<div className='App' style={{ color: finalCode }}>
					<h2>
						<b>
							{users[index].name.title +
								' ' +
								users[index].name.first +
								' ' +
								users[index].name.last}
						</b>
					</h2>
					<h2>{users[index].gender}</h2>
					<img
						src={users[index].picture.large}
						alt={
							users[index].name.title + ' ' + users[index].name.first + ' ' + users[index].name.last
						}
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
					<span>
						<button onClick={random} style={{ backgroundColor: finalCode }}>
							<i className='fa-solid fa-shuffle'></i>
						</button>
					</span>
				</div>
			</section>
			<hr />
			<section>
				<Ptacticeapis />
			</section>
			<hr />
			<section className='Tarjeta'>
				<Card
					title={me[0].title}
					item={me[0].item1}
					item2={me[0].item2}
					item3={me[0].item3}
					background='rgb(201, 66, 206)'
				/>
				<Card
					title={me[1].title}
					item={me[1].item1}
					item2={me[1].item2}
					item3={me[1].item3}
					background='rgb(190, 201, 46)'
				/>
				<Card
					title={me[2].title}
					item={me[2].item1}
					item2={me[2].item2}
					item3={me[2].item3}
					background='rgb(74, 192, 228)'
				/>
				<Card
					title={me[3].title}
					item={me[3].item1}
					item2={me[3].item2}
					item3={me[3].item3}
					background='rgb(71, 111, 219)'
				/>
				<Card
					title={me[4].title}
					item={me[4].item1}
					item2={me[4].item2}
					item3={me[4].item3}
					background='rgb(33, 165, 33)'
				/>
			</section>
		</>
	)
}

export default App
