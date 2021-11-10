import React from 'react'
// import User from './PROP-RENDER/User';
// import HoverCounterTwo from './PROP-RENDER/HoverCounterTwo';
// import ClickCounterTwo from './PROP-RENDER/ClickCounterTwo';
// import Counter from './PROP-RENDER/Counter';
import ComponentC from './Context/ComponentC';
import { UserProvider } from './Context/UserContext';
// import ClickCounter from './HOC/ClickCounter';
// import OnHover from './HOC/OnHover';
// import ErrorBound from './ErrorBound';
// import ErrorBoundary from './ErrorBoundary';
// import PortalDemo from './PortalDemo';
// import ParentComp from './ParentComp';
// import RefComp from './RefComp';
// import RefForwardParent from './RefForwardParent';


function App() {
  return (
  <React.Fragment>
    <UserProvider value='Harshita'>
    <ComponentC/>
    </UserProvider>
    
    {/* <Counter
    render={(count,incrementCount)=>(
      <ClickCounterTwo count={count} incrementCount={incrementCount}/>
    )}/> */}
    {/* <Counter>
    {(count,incrementCount)=>(
      <ClickCounterTwo count={count} incrementCount={incrementCount}/>
    )}</Counter>
     <Counter>
    {(count,incrementCount)=>(
      <HoverCounterTwo count={count} incrementCount={incrementCount}/>
    )}</Counter> */}
    {/* <User render={(isLoggedIn)=>isLoggedIn?'Harshita':'Guest'}/>
    <HoverCounterTwo/>
    <ClickCounterTwo/> */}
    {/* <ClickCounter name="harshita"></ClickCounter>
    <OnHover/> */}
    {/* <ErrorBoundary><ErrorBound name="Batman"/></ErrorBoundary> //we must have errorboundary in all the component as if there is error in any 1 component only that particular component will have fall back ui without affecting other ui
    <ErrorBoundary><ErrorBound name="SuperMan"/></ErrorBoundary>
    <ErrorBoundary><ErrorBound name="Joker"/></ErrorBoundary> */}
    
    
    
    {/* <ErrorBoundary>
    <ErrorBound name="Batman"/>
    <ErrorBound name="SuperMan"/>
    <ErrorBound name="Joker"/>
    </ErrorBoundary> */}
    
    {/* <PortalDemo/> */}
    {/* <RefForwardParent></RefForwardParent> */}
    {/* <RefComp/> */}
    {/* <ParentComp></ParentComp> */}
  </React.Fragment>
  
  );
}

export default App;
