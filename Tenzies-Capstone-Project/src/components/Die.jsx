export default function Die({ value, isHeld }) {
  return <button className={isHeld ? "held" : ""}>{value}</button>;
}
