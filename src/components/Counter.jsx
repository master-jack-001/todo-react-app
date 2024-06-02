import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    // const [value, setValue] = useState("");
  return (
    <div>       
       <p>The Count is: {count}</p>
       <h5>The Value is: {count%2 === 0 ? "even" : "odd"}</h5>
       {/* <p>The Value is: {value}</p> 
       <p><button onClick={() => setValue(count%2 === 0 ? "even" : "odd") } className='addbutton'>Change</button></p>   */}
       <p><button onClick={() => setCount(count + 1)} className='addbutton'>Increment</button></p>
       <p><button onClick={() => setCount(count - 1)} className='addbutton'>Decrement</button></p>
    </div>
  )
}

export default Counter
