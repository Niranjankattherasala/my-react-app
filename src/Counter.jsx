import react,{useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    return(<div><h2>{count}</h2>
    <button onClick={increment}>Increament</button>
        <button onClick={decrement}>decreament</button>
    <button onClick={reset}>reset</button></div>);
    
}
export default Counter