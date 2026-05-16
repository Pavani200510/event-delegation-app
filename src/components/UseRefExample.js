import {UseRef} from"react";
function UseRefExample(){
    const inputRef=UseRef();
    const focusInput=()=>{
        inputRef.current.focus();
    };
    return(
        <div>
            <h2>UseRef hook</h2>
            <input type ="text"
            ref={inputRef}
            placeholder="enter text"
            />
            <br/>
            <br/>
            <button onclick={focusInput}>
                focus input
            </button>
        </div>
    );
}
export default UseRefExample;