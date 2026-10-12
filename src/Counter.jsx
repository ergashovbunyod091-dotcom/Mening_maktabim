import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const qoshish_bor = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={qoshish_bor}>+</button>
        </div>
    );
};

export default Counter;