import React, { Component } from 'react'
//sharing code between react components using props whose value is a function. 
class User extends Component {
    render() {
        return (
            <div>
                {this.props.render(false)}
            </div>
        )
    }
}

export default User
