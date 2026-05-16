import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())} style={{marginLeft: '10px'}}>+</button>
    </div>
  );
}