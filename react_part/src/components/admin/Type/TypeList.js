import React from 'react';
import {useNavigate} from "react-router-dom";

const TypeList = ({type}) => {

    let navigate = useNavigate();

    const handleClick = (typeId) => {
        navigate("../edit/"+typeId);
    }

    return (
        <>
            <div className={"type-id"}>{type.id}</div>
            <div className={"type-email"}>{type.name}</div>
            <button onClick={() => handleClick(type.id)} >Edit</button>
        </>
    );
};

export default TypeList;