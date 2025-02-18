import React from 'react'

const ChildComponent = React.memo(({ onClick }) => {

    console.log("Child component rendered!");

    return (
        <div>
            <button onClick={onClick}>Click Me</button>
        </div>
    )
})

export default ChildComponent

// useCallback + React.memo work together to prevent unnecessary renders.