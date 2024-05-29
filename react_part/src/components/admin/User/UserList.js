import React from 'react';
import {useNavigate} from "react-router-dom";

const UserList = ({user}) => {

    let navigate = useNavigate();

    const handleClick = (userId) => {
        navigate("../edit/"+userId);
    }

    return (
        <>
            <div className={"user-id"}>{user.id}</div>
            <div className={"user-email"}>{user.email}</div>
            <div className={"user-nickname"}>{user.nickname}</div>
            <div className={"user-firstname"}>{user.firstname}</div>
            <div className={"user-lastname"}>{user.lastname}</div>
            <div className={"user-stripeid"}>{user.customerIdStripe}</div>
            <button onClick={() => handleClick(user.id)} >Edit</button>
        </>
    );
};

export default UserList;