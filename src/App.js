import React, {useState} from "react";
import { data } from "./data";
import { CardItem } from "./CardItem";
import { UserForm } from "./UserForm";

export const App = () => {

    const [persons, setPersons] = useState(data); 

    const onDeletePerson = (personId) => {

        setPersons((prevPersons) =>
            prevPersons.filter((person) => person.id !== personId)
        );
    };

    const addNewPerson = ({id, name, age, phone}) => {

        persons.push({id: id, name: name, age: age, phone: phone});
    };

    return <>
        <UserForm addNewPerson={addNewPerson}/>
        { persons.map((person) => <CardItem {...person} key={person.id} onDeletePerson={onDeletePerson} />) }
    </>
};