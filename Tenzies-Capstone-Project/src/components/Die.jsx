export default function Die({ value, isHeld, hold }) {
  return (
    <button onClick={hold} className={isHeld ? "held" : ""}>
      {value}
    </button>
  );
}
