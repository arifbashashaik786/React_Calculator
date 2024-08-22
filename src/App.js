import './App.css'
import Keypad from './keypad'
import {useState} from 'react'
export default function App()
{
  let [inp,setinput]=useState("")
  function handleclick(value){
    setinput(inp+value)

  }
  function calculate(value)
  {
    let a=eval(inp)
    setinput(a)
  }
  function clear(value)
  {
    setinput("")
  }
  return(
    <div className="container">
      <h1 style={{color:'white'}}>CALCULATOR</h1>
      <div className="calculator" >
        <hr></hr>
        <input type='text' className="output" value={inp}></input>
        <Keypad handle={handleclick} cal={calculate} clear={clear}/>
      </div>

    </div>
  )
}