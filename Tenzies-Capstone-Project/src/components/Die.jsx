export default function Die({ value, isHeld, hold }) {
  return (
    <button
      onClick={hold}
      className={isHeld ? "held" : ""}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, 
    ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  );
}
