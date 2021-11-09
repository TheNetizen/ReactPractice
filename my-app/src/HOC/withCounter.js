import React from "react";
//this is hoc whenever any variable is passed down to initial component from App.js
// which are getting render and uses HOC , HOC gets all the props assigned so we need to pass these props using spread operator

//UpdatedComponent is the component which executes the function and passes it to the component which is getting renderd
//original component is the component which needs to be modified
//newcomponent is the modified component
const UpdatedComponent=(OriginalComponent,IncrementNumber
    )=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount=()=>{
    this.setState(prevState=>{
        return {count: prevState.count + IncrementNumber}
    })
        }
        render(){
            return <OriginalComponent 
            count={this.state.count}
            incrementCount={this.incrementCount}
            //this is spread operator to pass the remaining props item to main component
            {...this.props} ></OriginalComponent>
        }
    }
    return NewComponent
}

export default UpdatedComponent