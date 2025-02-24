import "./App.css";

import Counter from "./components/Counter";
import Count from "./components/Count";

function App() {
  return (
    <>
      <div className="countbox">
        <Counter initialvalue="0" />
        <Count initialvalue="0" />
      </div>
    </>
  );
}
export default App;
