import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import { ISolution } from '../Interfaces'
import Grid from './Grid'

const Wordle = ({solution} : ISolution) => {
	const {wordle, handleKeyup } = useWordle(solution)

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup)
		return () => window.removeEventListener('keyup', handleKeyup)
	},[handleKeyup])

	return (
		<div>
			<Grid currentGuess = {wordle.currentGuess} guesses={wordle.guesses} turn={wordle.turn}/>
		</div>
	)
}

export default  Wordle;