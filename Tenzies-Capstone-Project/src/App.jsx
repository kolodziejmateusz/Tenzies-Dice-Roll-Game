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
   * Challenge:
   *
   * Create state to hold our array of numbers. (Initialize
   * the state by calling our `generateAllNewDice` function so it
   * loads all new dice as soon as the app loads)
   *
   * Map over the state numbers array to generate our array
   * of Die components and render those in place of our
   * manually-written 10 Die elements.
   */

  const [dice, setDice] = useState(generateAllNewDice());

  return (
    <main>
      <div className="dice-container">
        {dice.map((num, index) => (
          <Die key={index} value={num} />
        ))}
      </div>
    </main>
  );
}
