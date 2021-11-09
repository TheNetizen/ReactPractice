//It is same as pure components pure components are for class comp memo are for functional components
  import React from 'react'
  
  function MemoComp(props) {
      console.log("Render memo")
      return (
          <div>
              {props.name}
          </div>
      )
  }
  
  export default React.memo(MemoComp)
  