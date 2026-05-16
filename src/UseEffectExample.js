import { useEffect } from "react";
function useEffectExample(){
    useEffect(()=>{
        console.log("Component Rendered");

    
},[]);

return(
    <div>
    <h2>useEffect hook</h2>
    <p>check console.log output</p>
</div>
);
}
export default useEffectExample;