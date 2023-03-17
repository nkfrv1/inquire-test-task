import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import appRouter from './app/router';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
