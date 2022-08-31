import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Ptacticeapis = () => {
	const [joke, setJoke] = useState({})
	const [emoji, setEmoji] = useState({})
	const [character, setCharacter] = useState({})

	useEffect(() => {
		changeApi()
		changeEmojiAndJoke()
	}, [])

	const changeApi = () => {
		axios.get('https://randomuser.me/api/').then((res) => {
			setCharacter(res.data.results[0])
		})
	}

	const changeEmojiAndJoke = () => {
		axios.get('https://api.chucknorris.io/jokes/random').then((res) => setJoke(res.data))
		axios
			.get('https://api.emojisworld.fr/v1/random?limit=1')
			.then((res) => setEmoji(res.data.results[0]))
	}
	return (
		<div>
			<section>
				<div>
					<h1>
						{character.name?.title + ' ' + character.name?.first + ' ' + character.name?.last}
					</h1>
					<img
						src={character.picture?.large}
						alt={character.name?.title + ' ' + character.name?.first + ' ' + character.name?.last}
					/>
					<p>{character.email}</p>
					<button onClick={changeApi}>Next</button>
				</div>
			</section>
			<hr />
			<section>
				<div className='chuck'>
					<h1>Joke </h1>
					<p>{joke.value}</p>
					<div className='emoji'>
						<b>Emoji: </b>
						<span>{emoji?.emoji}</span>
					</div>
					<br />
					<button onClick={changeEmojiAndJoke}>Change</button>
				</div>
			</section>
		</div>
	)
}

export default Ptacticeapis
