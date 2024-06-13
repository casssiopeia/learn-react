import React, {useState} from "react";
import { Child } from "./Child";

export const Showtime = () => {

    const [shouldShow, setShouldShow] = useState(true);

    const onClick = () => {
        setShouldShow((show) => !show);
    }

    return (<div>
        <button onClick={onClick}>Toggle show</button>
        {shouldShow && <Child />}
    </div>);
}