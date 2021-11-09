import React, { forwardRef } from 'react'

// function RefForward() {
//     return (
//         <div>
//             <input type="text" />
//         </div>
//     )
// }

const RefForward=forwardRef(
    (props,ref)=>{
        return (
                <div>
                    <input type="text" ref={ref}/>
                </div>
                )
    }
)
export default RefForward
