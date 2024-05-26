import React, { useState } from "react";
import { useCounter } from "./hooks/useCounter";

export const Ground = () => {
    const {inc, dec, counter} = useCounter(1000);

    return (
        <>
            <div>
                <h1>Ground</h1>
                <p>{counter}</p>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
            </div>
        </>
    );
}