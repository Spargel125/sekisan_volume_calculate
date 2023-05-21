import React, {useEffect,useState} from 'react';
import init, {add} from "wasm-lib";
import logo from './logo.svg';
import './App.css';

function App() {
  const [ans, setAns] = useState(0);
useEffect(() =>{
  init().then(() => {
    setAns(add(3,6));
  })
},[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          1+2 = {ans}
        </p>
        <a
          className="App-link"
          href="https://github.com/Spargel125/react-rust-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reactとwasm(rust)によるページ作成のテンプレート！
        </a>
      </header>
    </div>
  );
}

export default App;
