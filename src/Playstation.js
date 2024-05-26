import React from "react";
import { useCounter } from "./hooks/useCounter";

// 1. state change
// 2. parent rerender
// 3. context change
// 4. props change
// 5. force rerender

// TODO hook use rules

export const Playstation = () => {

    const {inc, dec, counter} = useCounter(1);

    return (
        <>
            <div>
                <h1>Playstation</h1>
                <p>{counter}</p>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
            </div>
        </>
    );
};
