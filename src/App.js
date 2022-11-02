import { useSelector, useDispatch } from 'react-redux'
import { increment } from './store/counterSlice'

function App() {

  const {count, prime} = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter</h1>

      <p>{count}</p>
      <p>{prime ? '* PRIME *' : 'Not Prime'}</p>

      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >INCREMENT</button>

    </div>
  );
}

export default App;
