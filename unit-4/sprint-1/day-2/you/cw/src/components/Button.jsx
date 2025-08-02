import { useState } from "react";

function Button() {
  const [state, setState] = useState("");

  const handleName = () => {
    setState("Punit loves Divya");
  };
  return (
    <>
      <h1>{state}</h1>
      <button onClick={handleName}>Click</button>
    </>
  );
}
export default Button;
