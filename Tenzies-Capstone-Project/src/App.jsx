import Die from "./components/Die";
import { useState } from "react";
import "./App.css";

export default function App() {
  function generateAllNewDice() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
      numbers.push({ value: randomNumber, isHeld: false });
    }
    return numbers;
  }

  console.log(generateAllNewDice());

  /**
   * Challenge: Update the array of numbers in state to be
   * an array of objects instead. Each object should look like:
   * { value: <random number>, isHeld: false }
   *
   * Making this change will break parts of our code, so make
   * sure to update things so we're back to a working state
   */

  const [dice, setDice] = useState(generateAllNewDice());

  return (
    <main>
      <div className="dice-container">
        {dice.map((die, index) => (
          <Die key={index} value={die.value} />
        ))}
      </div>
      <button
        className="roll-dice"
        onClick={() => setDice(generateAllNewDice())}
      >
        Roll
      </button>
    </main>
  );
}
