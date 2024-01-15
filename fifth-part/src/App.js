import ClickCounter from "./components/ClickCounter";
import ClickCounter2 from "./components/ClickCounter2";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";
import HoverCounter2 from "./components/HoverCounter2";
import User from "./components/User";

function App() {
  return (
    <>
      {/* <ClickCounter name="Adam"/> */}
      {/* <HoverCounter/> */}

      <Counter render={(count, incrementCount)=><ClickCounter2 count={count} incrementCount={incrementCount}/>}/>
      <Counter render={(count, incrementCount)=><HoverCounter2 count={count} incrementCount={incrementCount}/>}/>
      {/* <ClickCounter2/> */}
      {/* <HoverCounter2/> */}
      <User render={(isLoggedIn)=>isLoggedIn?"Adam":"Guest"}/>
    </>
  );
}

export default App;
