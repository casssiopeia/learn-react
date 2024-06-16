import React, {useEffect, useState} from "react";

export const Post = ({id, userId, title, body}) => {

    const [blink, setBlink] = useState(false);
    const [showBorder, setShowBorder] = useState(false);

    const onToggleBtn = () => {

        setBlink((prevBlink) => !prevBlink);
    }

    useEffect(() => {

        let intervalId;

        if (blink ===  true) {
            intervalId = setInterval(() => {
                setShowBorder((prevShowBorder) => !prevShowBorder)
            }, 500)
        }

        return () => {
            clearInterval(intervalId);
        }

    }, [blink]);

    let blinkStyles = {
        border: '2px solid red'
    };

    let genStyles = {
        border: '2px solid black'
    };

    return (
        <div style={ showBorder ? blinkStyles : genStyles }>
            <h2>User: { userId }</h2>
            <h3>Title: { title }</h3>
            <p>Body: { body }</p>
            <button onClick={onToggleBtn}>Toggle Hot</button>
        </div>
    );
}