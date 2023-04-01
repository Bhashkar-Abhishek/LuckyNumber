import React, { useState } from 'react';
import "./LuckyNumberGame.css"

function LuckyNumberGame() {
  const [luckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(0);

  const handleGuess = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(count + 1);
    if (guess < luckyNumber) {
      alert('You guessed a smaller number.');
    } else if (guess > luckyNumber) {
      alert('You guessed a bigger number.');
    } else {
      alert(`Congratulations! You guessed the right number in ${count + 1} attempts.`);
      setGuess('');
      setCount(0);
    }
  };

  return (
    <div>
      <h1>Lucky Number Game</h1>
      <p>Guess a number between 1 and 100:</p>
      <form onSubmit={handleSubmit}>
        <input type="number" value={guess} onChange={handleGuess} />
        <button type="submit">Guess</button>
      </form>
    </div>
  );
}

export default LuckyNumberGame;
