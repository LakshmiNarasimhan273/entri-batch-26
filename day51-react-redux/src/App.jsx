import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Home from './components/Home';
import { increment, decrement, reset } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  // const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  // store -> counter -> counterSlice -> value;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      {/* <Home /> */}
    </div>
  )
}

export default App