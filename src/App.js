import './App.css';
import Navbar from './components/Navbar';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/counter';
function App() {
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.total)
  return (
      <div className="App">
        <Navbar/>
        Redux app -{count}
        <button onClick={()=>dispatch(increment())}>+</button>
      </div>
  );
}

export default App;
