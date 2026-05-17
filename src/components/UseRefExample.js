import { useRef } from "react";

function UseRefExample() {

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>

      <h2>useRef Hook</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="enter text"
      />

      <br />
      <br />

      <button onClick={focusInput}>
        Focus Input
      </button>

    </div>
  );
}

export default UseRefExample;