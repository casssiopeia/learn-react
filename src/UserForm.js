import React from "react";

export const UserForm = () => {

    return <>
    <div>
        <p>Введите имя:</p>
        <input type="text" id="name" />
        <p>Введите возраст:</p>
        <input type="text" id="age" />
        <p>Введите номер телефона:</p>
        <input type="text" id="phone" />

        <button>OK</button>
    </div>
    </>
}