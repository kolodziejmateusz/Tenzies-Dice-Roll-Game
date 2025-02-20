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
   * Challenge: Add conditional styling to the Die component
   * so that if it's held (isHeld === true), its background color
   * changes to a light green (#59E391)
   *
   * Remember: currently the Die component has no way of knowing
   * if it's "held" or not.
   */

  const [dice, setDice] = useState(generateAllNewDice());

  return (
    <main>
      <div className="dice-container">
        {dice.map((die, index) => (
          <Die key={index} value={die.value} isHeld={die.isHeld} />
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
