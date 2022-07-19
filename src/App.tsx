import { useState } from 'react';
import reactLogo from '../public/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div id="logos">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h2>Vite + React + TypeScript + Eslint (Airbnb) + Eslint + Jest + Testing Library = ViteRC❤️‍🔥</h2>
      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs" data-testId="read-the-docs">
        <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
          Vite Docs
        </a>
        {' | '}
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React Docs
        </a>
        {' | '}
        <a className="App-link" href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
          Typescript
        </a>
        {' | '}
        <a className="App-link" href="https://eslint.org/" target="_blank" rel="noopener noreferrer">
          Eslint docs
        </a>
        {' | '}
        <a className="App-link" href="https://github.com/airbnb/javascript" target="_blank" rel="noopener noreferrer">
          Airbnb JS Style Guide
        </a>
        {' | '}
        <a
          className="App-link"
          href="https://github.com/airbnb/javascript/tree/master/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Airbnb React Style Guide
        </a>
        {' | '}
        <a
          className="App-link"
          href="https://jestjs.io/pt-BR/docs/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jest
        </a>
        {' | '}
        <a className="App-link" href="https://testing-library.com" target="_blank" rel="noopener noreferrer">
          Testing Library
        </a>
        {' | '}
        <a className="App-link" href="https://github.com/potreco/viterc" target="_blank" rel="noopener noreferrer">
          Template repository
        </a>
      </p>
    </div>
  );
}

export default App;
