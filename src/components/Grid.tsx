import Row from './Row'
import { IGuess } from '../Interfaces';

interface Props{
    guesses: Array<Array<IGuess>>;
    currentGuess: string;
    turn: number;
}

export default function Grid({ currentGuess , guesses , turn} : Props) {
  return (
    <div>
        {
            guesses.map((g, i) => {
                if (i === turn){
                    return <Row key={i} currentGuess = {currentGuess}/>
                }
                return <Row key={i} guess = {g}/> 
            })
        }
    </div>
  )
}
