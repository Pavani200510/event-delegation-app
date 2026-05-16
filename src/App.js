import EventDelegation from  "./components/EventDelegation";
import BuildInfo from "./components/buildInfo";
import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";
import UseRefExample from "./components/UseRefExample";
import FetchData from "./components/FetchData";
function App(){
  return(
    <div>
      <EventDelegation/>
      <BuildInfo/>
      <UseStateExample/>
      <UseEffectExample/>
      <UseRefExample/>
      <FetchData/>

    </div>
  );
}
  export default App;
