import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Counter</h1>
      <button onClick={() => setCount(count + 1)}>
        Click {count}
      </button>
    </div>
  );
}

export default App;