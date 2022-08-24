import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import Hobbies from './components/Hobbies'
import FreeTime from './components/FreeTime'

function App() {
	const [count, setCount] = useState(0)

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
		<div className='App'>
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
		</div>
	)
}

export default App
