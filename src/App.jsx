import React, { useEffect, useState } from 'react'

const App = () => {

  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
  

   useEffect(function(){
    console.log("useEffrct is runningg...");
    
  },[counter1][counter2])

  return (
    <div>
      {/* <input value={title} onChange={(e)=>{
        settitle(e.target.value)
      }} type="text" />
    <h1>{counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Incresse</button> */}

      <h1>{counter1}</h1>
      <button onClick={()=>{
        setCounter1(Math.floor(Math.random()*100))
      }}>Chnage Number1</button>

      <h1>{counter2}</h1>
      <button onClick={()=>{
        setCounter2(Math.floor(Math.random()*100))
      }}>Chnage Number1</button>

      <h1>{counter3}</h1>
      <button onClick={()=>{
        setCounter3(Math.floor(Math.random()*100))
      }}>Chnage Number3</button>
    </div>
  )
}

export default App
