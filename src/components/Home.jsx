import { useState, useEffect, useContext } from 'react';
import { LoginContext } from '../App';

const Home = () => {
  // const [counter, setCounter] = useState(0);
  const login = useContext(LoginContext);

  const [details, setDetails] = useState({ counter: 0, name: '' });

  console.log(login);

  //const array = useState(0);
  //console.log(array);

  const increaseCounter = () => {
    setDetails((previous) => ({
      ...previous,
      counter: previous.counter + 1,
    }));
  };

  const changeName = (nameChange) => {
    setDetails((previous) => ({
      ...previous,
      name: nameChange,
    }));
  };

  useEffect(() => {
    console.log(details);
    document.title = `Counter ${details.counter}`;

    return () => {
      console.log('Cleanup function called', details);
    };
  }, [details]);
  return (
    <div>
      <h1>Welcome to my home page</h1>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => changeName(e.target.value)}
      />
      <p>Counter {details.counter}</p>
      <button onClick={() => increaseCounter()}>Increment</button>
    </div>
  );
};

export default Home;
