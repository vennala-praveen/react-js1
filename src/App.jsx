import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice(){

    if(count < 20){
    const response = await axios.get('https://api.adviceslip.com/advice');
    setAdvice(response.data.slip.advice);
    setCount(c=>c+1)
    }
    else alert('Advice limit reached try again today')
  }

  return (
    <div className='container'>
      <button className='btn' onClick={getAdvice}>Get Advice</button>
      {advice && <p className='advice'>{advice}</p>}
      <p className='count'>I have read {count} pieces of advice today</p>
    </div>
  )
}

export default App
