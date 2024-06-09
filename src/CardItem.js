import React from "react";

export const CardItem = ({ id, name, age, phone, onDeletePerson }) => {
    return (
        <div>
            <hr/>
            <h2>{ name }</h2>
            <p>{ age }</p>
            <p>{ phone }</p>
            <button onClick={() => onDeletePerson(id)}>Delete</button>
            <hr/>
        </div>
    )
};