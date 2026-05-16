import { useState } from "react";

function UseStateExample(){

    const[count,setcount]=useState(0);

    return(
        <div>
            <h2>UseState hook</h2>
            <h1>{count}</h1>

            <button onClick={()=>setcount(count+1)}>
                increment
            </button>
            

        </div>
    );
}
export default UseStateExample;