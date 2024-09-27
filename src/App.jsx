import { useRef, useState } from "react";
import Props from "./Props";
import Props_with_Destructuring from "./Props_with_Destructuring";

function App() {
 
const array = ['hello','bye'];

let data = 'hello'
array.push('wow');

//------

let [x,setX] = useState(0)
const clickMe = () => {
  setX(x + 1)}

//------

const inputValue = useRef(null);
//we created value state with an empty array. this this where we will store all our input value to display it as a list
const [value,setValue] = useState([])
const getInputValue = () => {
  setValue([...value,inputValue.current.value])
}


  return (
    <>
    {/*To display array as a list */}
   {array.map(e=>{return <p>{e}</p>})}
   {/* Ternary operator with displaying the result */}
   {data==='hello'? <p>Hello</p> : <p>Bye</p>}
    {/* useState for update a state of variable */}
   <p>{x}</p>
   <button onClick={clickMe}>click me</button>
   {/*We created Props.jsx to pass our x element to there using props. Name of the props will be count */}
   <Props count={x}/>
   <Props_with_Destructuring count={x}/>

     {/*Now we will create input field, button and all input value will be displayed below as a list. We will use useRef hook. */}

     <input ref={inputValue} type="text" />
     <button onClick={getInputValue}>click me</button>
     {value.map((val,index)=>{ return <p key={index}>{val}</p>})}

    </>
  )
}

export default App
