import { IGuess } from '../Interfaces';

interface Props{
    guess?: Array<IGuess>;
    currentGuess?: string;
}
export default function Row({guess , currentGuess}: Props) {
    if(guess){
        return (
            <div className='row past'>
                {guess.map((l,i) =>(
                    <div key={i} className = {l.color}>{l.key}</div>
                ))}
            </div>
        )
    }
    if (currentGuess){
        return (
            <div className='row current'>
                {[...currentGuess].map((l,i) =>(
                    <div key={i} className = 'filled'>{l}</div>
                ))}
                {[...Array(5 - currentGuess.length)].map((_,i) =>(
                    <div key={i} />
                ))}                
            </div>
        )
    }
    return (
        <div className='row'> 
        {[...Array(5)].map((_,i) => (
            <div key={i}/>
        ))}
        </div>
    )
}
