import React, { useEffect, useState } from 'react';
import Wordle from './components/Wordle';

const App: React.FC = () =>{
  const [solution, setSolution] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json => {
      const random = json[Math.floor(Math.random()*json.length)]
      setSolution(random.word)
    })
  },[setSolution])

  return <div className="App"> 
      <h1>Wordle</h1>
      <Wordle solution={solution}/>
      <small>{solution}</small>
  </div>
}
export default App;
