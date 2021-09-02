import { useState } from "react";
import Info from "./Info";
function App() {
  let number;
  const [status, setStatus] = useState(0);
  let fact = "A very interesting fact";
  function getInformation() {
    setStatus(1);
    setTimeout(() => {
      setStatus(2);
    }, 1000);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getInformation();
        }}
      >
        <label>Enter a number</label>
        <input onChange={(e) => (number = e.target.value)} />
        <button>Find Fact</button>
        <Info status={status} fact={fact} />
      </form>
    </div>
  );
}

export default App;
