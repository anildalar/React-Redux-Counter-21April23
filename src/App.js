//1. import area
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddByOne, Reset, SubtractByOne } from './_actionCreators';


//2. Defination Area
function App() {
  //2.1 Hooks area
  let storeObject = useSelector(storeObject=>storeObject )
  let dispatch = useDispatch()
  //2.2 function definationa rea


  //2.3 Return statement
  return (
    <>
      { console.log(storeObject)}
      <h1 style={{textAlign:"center"}}>{storeObject.value}</h1>
      <div style={{textAlign:"center"}}> 
        <button onClick={()=>{ dispatch(AddByOne()) }}>+</button>
        <button onClick={()=>{ dispatch(Reset()) }}>Reset</button>
        <button onClick={()=>{ dispatch(SubtractByOne()) }}>-</button>
      </div>
    </>
  );
}

//3. Export Area
export default App;
