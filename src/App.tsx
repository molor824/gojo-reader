import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <div>Tulga</div>
    </>
  );
}

export default App;
