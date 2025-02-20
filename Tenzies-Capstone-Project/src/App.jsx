import Die from "./components/Die";
import { useState } from "react";
import "./App.css";

export default function App() {
  function generateAllNewDice() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
      numbers.push(randomNumber);
    }
    return numbers;
  }

  console.log(generateAllNewDice());

  /**
   * Challenge: Create a `Roll Dice` button that will re-roll
   * all 10 dice
   *
   * Clicking the button should generate a new array of numbers
   * and set the `dice` state to that new array (thus re-rendering
   * the array to the page)
   */

  const [dice, setDice] = useState(generateAllNewDice());

  return (
    <main>
      <div className="dice-container">
        {dice.map((num, index) => (
          <Die key={index} value={num} />
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
