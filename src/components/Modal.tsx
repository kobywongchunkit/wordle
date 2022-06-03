import React from 'react'

interface Props{
    isCorrect: Boolean;
    turn: number;
    solution?: string;
}
export default function Modal({isCorrect, turn, solution} : Props) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>Correct</h1>
                <p>The solution is {solution}. You guessed it in {turn} turn(s).</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Too bad...</h1>
                <p>The solution is {solution}.</p>
            </div>
        )}
    </div>
  )
}
