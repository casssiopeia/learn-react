import React, { useState } from "react";

export const UserForm = ({addNewPerson}) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onAgeChange = (event) => {
        setAge(event.target.value);
    }

    const onPhoneChange = (event) => {
        setPhone(event.target.value);
    }

    return <>
    <div>
        <p>Введите имя:</p>
        <input type="text" id="name" onChange={onNameChange} value={name}/>
        <p>Введите возраст:</p>
        <input type="text" id="age" onChange={onAgeChange} value={age} />
        <p>Введите номер телефона:</p>
        <input type="text" id="phone" onChange={onPhoneChange} value={phone} />

        <button onClick={() => {addNewPerson({id: Math.random(), name, age, phone})}}>OK</button>
    </div>
    </>
}