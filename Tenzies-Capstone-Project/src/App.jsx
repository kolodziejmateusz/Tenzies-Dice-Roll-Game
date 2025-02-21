import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  function generateAllNewDice() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
      numbers.push({ id: nanoid(), value: randomNumber, isHeld: false });
    }
    return numbers;
  }

  const [dice, setDice] = useState(generateAllNewDice());
  /**
   * Challenge: Create a function `hold` that takes
   * `id` as a parameter. For now, just have the function
   * cons ole.log(id).
   *
   * Then, figure out how to pass that function down to each
   * instance of the Die component so when each one is clicked,
   * it logs its own unique ID property. (Hint: there's more
   * than one way to make that work, so just choose whichever
   * you want)
   */

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
      <button
        className="roll-dice"
        onClick={() => setDice(generateAllNewDice())}
      >
        Roll
      </button>
    </main>
  );
}
