// when we want to share a functionality to multiple components which is not just child of any parent component
// we need higer order component which can share same functionality to different components
//it is a parttern which takes a component as an argument and returns a component
//const newComponent =higherOrderComponent(originalComponent)
import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
export class ClickCounter extends Component {
    
    render() {
        return (
            <button onClick={this.props.incrementCount}> {this.props.name} Clicked {this.props.count} times</button>
        )
    }
}

export default UpdatedComponent(ClickCounter,10)
