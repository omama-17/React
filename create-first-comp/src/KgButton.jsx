import { useState } from "react"
function KgButton()
{
    const [count,setCount] = useState(0);
    return <>
    <h1>the count is {count}</h1>
    <button onClick={() => setCount(count+1) }>Increment</button>
    <button onClick={() => setCount(count-1) }>Decrement</button>
    </>
}
export default KgButton