import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice(){

    if(count < 10){
      console.log('Hello')
    const response = await axios.get('https://api.adviceslip.com/advice');
    setAdvice(response.data.slip.advice);
    setCount(c=>c+1)
    }
    else alert('Advice limit reached try again today')
  }

  return (
    <div>
      <button onClick={getAdvice}>Get Advice</button>
      <h1>{advice}</h1>
      <p>I have read {count} pieces of advice today</p>
    </div>
  )
}

export default App
