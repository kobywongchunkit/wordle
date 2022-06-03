import React, { useEffect, useState } from 'react';
import Wordle from './components/Wordle';

const App: React.FC = () =>{
  const [solution, setSolution] = useState<string>('')

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word?length=5&lang=en')
    .then(res => res.json())
    .then(json => {
      setSolution(json[0])
    })
  },[setSolution])

  return <div className="App"> 
      <h1>Wordle</h1>
      <Wordle solution={solution}/>
      <small>{solution}</small>
  </div>
}
export default App;
