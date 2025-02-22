import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const generateRandomNumber = () => Math.floor(Math.random() * (6 - 1) + 1);
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

  const [dice, setDice] = useState(generateAllNewDice());

  /**
   * Challenge: Update the `rollDice` function to not just roll
   * all new dice, but instead to look through the existing dice
   * to NOT role any that are being `held`.
   *
   * Hint: this will look relatively similiar to the `hold`
   * function below. When we're "rolling" a die, we're really
   * just updating the `value` property of the die object.
   */

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((item) => {
        return item.isHeld ? item : { ...item, value: generateRandomNumber() };
      })
    );
  }

  function hold(id) {
    console.log(id);

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
        Roll
      </button>
    </main>
  );
}
