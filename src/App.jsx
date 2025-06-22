import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [advice, setAdvice] = useState('');

  async function getAdvice(){
    console.log('Hello')
    const response = await axios.get('https://api.adviceslip.com/advice');
    setAdvice(response.data.slip.advice)
  }

  return (
    <div>
      <button onClick={getAdvice}>Get Advice</button>
      <h1>{advice}</h1>
    </div>
  )
}

export default App
