//to catch error in react component

import React from 'react'

function ErrorBound({name}) {
    if(name==='Joker'){
        throw Error('Not a Hero!')
    }
    return (
        <div>
            {name}
        </div>
    )
}

export default ErrorBound
