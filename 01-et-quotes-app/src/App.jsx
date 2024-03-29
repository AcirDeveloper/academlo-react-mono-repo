import { useState } from 'react'
import './App.css'

import Quotes from './components/Quotes'
import Author from './components/Author'
import data from './components/quotes.json'

function App() {
  const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871', '#B39CD0']
  const randomColor = Math.floor(Math.random() * colors.length)

  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * data.length))

  const selectNextQuote = () => {
    setQuoteIndex(Math.floor(Math.random() * data.length))
  }

  document.body.style = `background: ${colors[randomColor]}`

  return (
    <div className='App'>
      <div className='Card'>
        <Quotes index={quoteIndex} quo={data} tint={colors[randomColor]} />
        <Author
          index={quoteIndex}
          aut={data}
          onSelectNextQuote={selectNextQuote}
          tint={colors[randomColor]}
        />
      </div>
    </div>
  )
}

export default App
