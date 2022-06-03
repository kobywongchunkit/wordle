import { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import { ISolution, IWordle } from '../Interfaces'
import Grid from './Grid'
import Modal from './Modal'

const Wordle = ({solution} : ISolution) => {
	const {wordle, handleKeyup } = useWordle(solution)
	const {
		currentGuess,
		guesses,
		turn,
		isCorrect
	}:IWordle = wordle
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup)
		if (wordle.isCorrect || turn > 5){
			setTimeout(()=> setShowModal(true) , 500)
			
		}
		return () => window.removeEventListener('keyup', handleKeyup)
	},[handleKeyup])

	return (
		<div>
			<Grid currentGuess = {currentGuess} guesses={guesses} turn={turn}/>
			{showModal && <Modal isCorrect = {isCorrect} turn={turn} solution = {solution}/>}
		</div>
	)
}

export default  Wordle;