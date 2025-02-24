export const Button = ({ colorScheme, variant, size }) => {
const handleClick=()=>{
  
}
  return <button data-testid="color" className={`btn ${colorScheme || "red"}  
  ${variant || "ghost"}`} onClick={handleClick}
   >Click

  </button>;
};
