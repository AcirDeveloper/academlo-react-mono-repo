import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<Sidebar />
			<div className='container'>
				<h1 className='title'>My React App</h1>
				<p className='info'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<button className='btn'>Explore now</button>
			</div>
		</div>
	)
}

export default App
