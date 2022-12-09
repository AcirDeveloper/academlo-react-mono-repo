import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
	BrowserRouter as Router,
	Switch,
	Routes,
	Route,
	Link,
	BrowserRouter,
} from 'react-router-dom'
import About from '../components/About'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/about' element={<About />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
