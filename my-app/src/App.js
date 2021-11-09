import React from 'react'
import ClickCounter from './HOC/ClickCounter';
import OnHover from './HOC/OnHover';
// import ErrorBound from './ErrorBound';
// import ErrorBoundary from './ErrorBoundary';
// import PortalDemo from './PortalDemo';
// import ParentComp from './ParentComp';
// import RefComp from './RefComp';
// import RefForwardParent from './RefForwardParent';


function App() {
  return (
  <React.Fragment>
    <ClickCounter name="harshita"></ClickCounter>
    <OnHover/>
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
