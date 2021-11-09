//in pure component shouldcomponentmount() performs shallow props and state comparison in shallow comparison
//primitive data type returns comparsion to true
//complex datatype like array and dict returns true only when a is assigned to b a===b is true
//prev value of props and state are compared with current value and it is decided whether component should be rerendered or not.

import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("Pure Component Render")
        return (
            <div>
                <h1>Pure Component {this.props.name}</h1>
            </div>
        )
    }
}

export default PureComp

