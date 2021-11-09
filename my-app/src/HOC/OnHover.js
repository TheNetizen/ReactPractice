import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
export class OnHover extends Component {
   
            render() {
                return (
                    <h2 onMouseOver={this.props.incrementCount}>  Hovered {this.props.count} times</h2>
                )
            }
        }
        
export default UpdatedComponent(OnHover,5)
        
 


