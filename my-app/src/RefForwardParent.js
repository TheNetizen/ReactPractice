import React, { Component, createRef } from 'react'
import RefForward from './RefForward'

class RefForwardParent extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=createRef()
    }
    
    render() {
        return (
            <div>
                <RefForward ref={this.inputRef}></RefForward>
                <button>Focus Input</button>
            </div>
        )
    }
}

export default RefForwardParent
