import { useEffect } from "react";

function UseEffectExample() {

  useEffect(() => {

    console.log("Component Rendered");

  }, []);

  return (
    <div>

      <h2>useEffect Hook</h2>

      <p>Check console output</p>

    </div>
  );
}

export default UseEffectExample;