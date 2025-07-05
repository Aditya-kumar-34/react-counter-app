import React, { useState } from 'react';
import './State.css'; // Import the CSS file

export default function State() {
    const [count, setCount] = useState(0);

    function onIncrease() {
        setCount(count + 1);
    }

    function onDecrease() {
        setCount(count - 1);
    }

    function onReset() {
        setCount(0);
    }

    // Conditional color class
    let colorClass = '';
    if (count > 0) colorClass = 'green';
    else if (count < 0) colorClass = 'red';
    else colorClass = 'blue';

    return (
        <div className="container">
            <h1 className={colorClass}>Count: {count}</h1>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>Decrease</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}
