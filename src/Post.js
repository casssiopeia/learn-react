import React, {useState} from "react";

export const Post = ({id, userId, title, body}) => {

    const [blink, setBlink] = useState(false);

    setInterval(() => {
        
    }, 1000);

    let blinkStyles = {
        border: '2px solid red'
    };

    let genStyles = {
        border: '2px solid black'
    };

    return (
        <div style={ styles }>
            <h2>User: { userId }</h2>
            <h3>Title: { title }</h3>
            <p>Body: { body }</p>
            <button onClick={r}>Toggle Hot</button>
        </div>
    );
}