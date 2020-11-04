import React from 'react'

function ReactMemo({name}) {
    console.log("Rendering function");
    return (        
        <div>
           <p> Name is {name}</p> 
        </div>
    )
}

export default React.memo(ReactMemo);
