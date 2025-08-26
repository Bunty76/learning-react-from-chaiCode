import { useState } from "react"

function App() {

  let [count,setcount]=useState(0)

  const addOne=()=>{
    if(count<5)  setcount(count+1);
  }

  const remOne=()=>{
    if(count>0) setcount(count - 1);
    
  }
  return (
    <>
      <h1>hello world!!</h1>
      <div className="counter-div"> counter:goes 0 to 10 only</div>
      <button onClick={addOne}>add one {count} </button>
      <button onClick={remOne}>rem one{count} </button>
    </>
  );
}

export default App
