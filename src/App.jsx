import { useState, createContext } from 'react';

import './App.css';
import ShoppingList from './components/ShoppingList';
import MyButton from './components/MyButton';
import Home from './components/Home';

export const LoginContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  function handleClick(e) {
    console.log(e);
    setCount(count + 1);
  }

  return (
    <>
      <LoginContext.Provider value={{ login: 'John Doe' }}>
        <Home></Home>
      </LoginContext.Provider>
      <ShoppingList>{count}</ShoppingList>

      <MyButton count={count} handleSet={handleClick}></MyButton>
    </>
  );
}

export default App;
