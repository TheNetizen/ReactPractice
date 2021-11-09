//in index.js add a div element with id portal-root
//React dom. create pordal method is used which contain 2 parameter jsx and id 
import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            <h1>Portal Demo</h1>
        </div>,document.getElementById('portal-root')
    )
}

export default PortalDemo
