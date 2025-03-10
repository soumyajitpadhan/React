import React, { useEffect, useState } from 'react'

const FunctionalLifecycleExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("🟢 Component Mounted OR Updated - Count:", count);

        // Cleanup function (Unmounting Phase)
        return () => {
            console.log("❌ Component Unmounted OR Before Next Update");
        };

    }, [count]); // Runs on Mount & every update of 'count'

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default FunctionalLifecycleExample 