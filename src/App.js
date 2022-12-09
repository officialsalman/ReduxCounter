
import {useSelector,useDispatch} from "react-redux"
function App() {
  const state=useSelector(state=>state)
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch({type:"Add"})
  }
  const decrement=()=>{
    dispatch({type:"SUB"})
  }
  const mul=()=>{
    dispatch({type:"Mul"})
  }
  const div=()=>{
    dispatch({type:"Div"})
  }

  return (
    <div className="App">
    <h1>{state.counter}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={mul}>*</button>
    <button onClick={div}>/</button>

 
    </div>
  );
}

export default App;
