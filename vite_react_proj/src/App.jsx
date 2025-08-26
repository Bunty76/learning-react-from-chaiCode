import { useState } from "react"

function App() {

  let [count,setcount]=useState(0)

  const addOne=()=>{
    count=count+1
    setcount(count)
    console.log(count)
  }
  return (
    <>
      <h1>hello world!!</h1>
      <div className="counter-div"> counter:{count}</div>
      <button onClick={addOne}>add one {count}</button>
    </>
  );
}

export default App
