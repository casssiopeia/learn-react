import { useState } from "react";

export const useCounter = (delta) => {
    const [counter, setCounter] = useState(0);

    const inc = () => {
        setCounter(prevCounter => prevCounter + delta);
    }

    const dec = () => {
        setCounter(prevCounter => prevCounter === 0 ? prevCounter : prevCounter - delta);
    }

    return (
        inc, 
        dec, 
        counter
    )
};