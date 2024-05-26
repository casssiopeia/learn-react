import React from "react";
import { useCounter } from "./hooks/useCounter";

export const Egg = () => {
    const {inc, dec, counter} = useCounter(10);

    return (
        <>
            <div>
                <h1>Egg</h1>
                <p>{counter}</p>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
            </div>
        </>
    );
}