import React, { useState } from 'react';

function MyComponent() {
    // Initialize state with a default value
    const [count, setCount] = useState(0); // Here, 0 is the default value

    // Function to increment count
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default MyComponent;
