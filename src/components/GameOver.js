import React, { useContext } from 'react';
import { AppContext } from '../App';

const GameOver = () => {
    const { gameOver, currAttempt, correctWord } = useContext(AppContext);

    return (
        <div className='gameOver'>
            <h3>{gameOver.guessedWord ? "You won the round!" : "Sorry :( Try again!"}</h3>
            <h1>Correct word was: {correctWord}</h1>
            {gameOver.guessedWord && (<h3>You guessed the word in {currAttempt.attempt} attempts</h3>)}
        </div>
    )
}

export default GameOver;
