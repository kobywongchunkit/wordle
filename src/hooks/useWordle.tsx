import { useState } from 'react'
import { IWordle, IGuess } from '../Interfaces';

const useWordle = (solution: string) =>{
    
    const [wordle , setWordle] = useState<IWordle>({
        turn: 0,
        currentGuess: '',
        guesses: [...Array(6)],
        history: [],
        isCorrect: false,
    })

    const formatGuess = () : Array<IGuess> => {
        return [...wordle.currentGuess].map( (charater, index) =>({
            key : charater ,
            color : solution[index] === wordle.currentGuess[index] ? 'green' : solution.includes(charater)? 'yellow' : 'grey'
        }))
    }

    const addNewGuess = (formattedGuess : Array<IGuess>) => {
        const cloneguess = [...wordle.guesses]
        cloneguess[wordle.turn] = formattedGuess
        setWordle((prev : IWordle) => ({
            ...prev,
            guesses : cloneguess ,
            turn: prev.turn + 1,
            isCorrect: prev.currentGuess === solution,
            history: [...prev.history, prev.currentGuess],
            currentGuess:''
        }))
    }

    const handleKeyup = ( e : KeyboardEvent ):void => {  //need fix
        const {turn , currentGuess , history, isCorrect} = wordle
        if (isCorrect)
            return
        const key = e.key
        if (key === 'Enter'){
            if ( turn < 6 && currentGuess.length === 5 && !history.includes(currentGuess)){
                addNewGuess(formatGuess())
            }
            return
        }

        if (key === 'Backspace'){
            setWordle((prev) => ({
                ...prev,
                currentGuess: prev.currentGuess.slice(0,-1)
            }))
            return
        }

        if(/^[A-Za-z]$/.test(key)){
            if (wordle.currentGuess.length < 5){
                setWordle((prev) => ({
                    ...prev,
                    currentGuess: prev.currentGuess + key.toLowerCase()
                }))
            }
        }
    }
    return {wordle,handleKeyup}
}

export default useWordle