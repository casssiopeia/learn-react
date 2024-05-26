import React from "react";
import { Playstation } from "./Playstation";
import { Egg } from "./Egg";
import { Ground } from "./Ground";

export const App = () => {

    const onChange = (e) => {
        console.log(e);
    }

    return (
        <>
        <input type="text" onChange={onChange}></input>
        <Playstation />
        <Egg />
        <Ground />
        </>
    );
}