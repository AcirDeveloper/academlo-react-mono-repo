import { useState } from 'react'
import './App.css'

import Quotes from './components/Quotes'
import Author from './components/Author'
import data from './components/quotes.json'

function App() {
	const [quotes, setquotes] = useState(Math.floor(Math.random() * data.length))

	const btnRandom = () => {
		setquotes(Math.floor(Math.random() * data.length))
	}

	/* Otra manera de hacer los colores random */
	const colorsRandom = () => {
		let makingColorCode = '0123456789ABCDEF'
		let finalCode = '#'
		for (let counter = 0; counter < 6; counter++) {
			finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)]
		}
		return finalCode
	}
	document.body.style = `background: ${colorsRandom()}`

	return (
		<div className='App'>
			<div className='Card'>
				<Quotes index={quotes} quo={data} />
				<Author index={quotes} aut={data} btn={btnRandom} />
			</div>
		</div>
	)
}

export default App
