import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const generateRandomNumber = () => Math.floor(Math.random() * (6 - 1) + 1);
  const [dice, setDice] = useState(generateAllNewDice());

  const gameIsWon =
    dice.every((item) => item.isHeld) &&
    dice.every((item) => item.value == dice[0].value);

  if (gameIsWon) {
    console.log("You won");
  }

  function generateAllNewDice() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push({
        id: nanoid(),
        value: generateRandomNumber(),
        isHeld: false,
      });
    }
    return numbers;
  }

  function rollDice() {
    if (gameIsWon) {
      setDice(generateAllNewDice());
    } else {
      setDice((prevDice) =>
        prevDice.map((item) => {
          return item.isHeld
            ? item
            : { ...item, value: generateRandomNumber() };
        })
      );
    }
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">
        {dice.map((die, index) => (
          <Die
            key={index}
            value={die.value}
            isHeld={die.isHeld}
            hold={() => hold(die.id)}
          />
        ))}
      </div>
      <button className="roll-dice" onClick={() => rollDice()}>
        {gameIsWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
