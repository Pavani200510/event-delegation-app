import EventDelegation from  "./components/EventDelegation";
import BuildInfo from "./components/buildInfo";
import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";
import UseRefExample from "./components/UseRefExample";
import FetchData from "./components/FetchData";
import Counter from "./components/counter/counter";
function App(){
  return(
    <div>
      <EventDelegation/>
      <BuildInfo/>
      <UseStateExample/>
      <UseEffectExample/>
      <UseRefExample/>
      <FetchData/>
      <Counter/>

    </div>
  );
}
  export default App;
