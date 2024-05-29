import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../../services/user.service";
import error from "../../../_utils/error";


const UserAdd = () => {

    let uid = useParams();
    const [data, setData] = useState({
        isActive: true
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('data',data);
        userService.addUser(data)
            .then((r) => (alert("Modification effectuée")))
            .catch((err) => alert(err.message))
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    console.log('data', data);

    return (
        <div className={"traileradd"}>
            <h1>Ajout d'un user</h1>
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={"email"} placeholder={"email"}
                       onChange={handleChange} />
                <input type={"text"} name={"password"} placeholder={"password"}
                       onChange={handleChange} />
                <input type={"text"} name={"nickname"} placeholder={"nickname"}
                       onChange={handleChange} />
                <input type={"text"} name={"firstname"} placeholder={"firstname"}
                       onChange={handleChange} />
                <input type={"text"} name={"lastname"} placeholder={"lastname"}
                       onChange={handleChange} />
                <input type={"text"} name={"customerIdStripe"} placeholder={"customerIdStripe"}
                       onChange={handleChange} />
                <select name="role" onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="admin">Admin</option>
                    <option value="user">Utilisateur</option>
                </select>
                <button type={"submit"} value={"Modifier"} />
            </form>
        </div>
    );
};

export default UserAdd;