import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../../services/user.service";
import error from "../../../_utils/error";


const UserEdit = () => {

    let uid = useParams();
    const [user, setUser] = useState([]);
    const [data, setData] = useState({})


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('data',data);
        userService.editUser(user.id, data)
            .then((r) => (alert("Modification effectuée")))
            .catch((err) => alert(err.message))
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        userService.getUser(uid.uid)
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err => console.log(error))
    }, [])


    return (
        <div className={"traileredit"}>
            <h1>edit des users</h1>
            <form onSubmit={handleSubmit}>
                <div><p>{user.id}</p> </div>
                <input type={"text"} name={"email"} defaultValue={user.email}
                       onChange={handleChange} />
                <input type={"text"} name={"nickname"} defaultValue={user.nickname}
                       onChange={handleChange} />
                <input type={"text"} name={"firstname"} defaultValue={user.firstname}
                       onChange={handleChange} />
                <input type={"text"} name={"lastname"} defaultValue={user.lastname}
                       onChange={handleChange} />
                <input type={"text"} name={"customerIdStripe"} defaultValue={user.customerIdStripe}
                       onChange={handleChange} />
                <input type={"text"} name={"isActive"} defaultValue={(user.isActive)? 0 : 1}
                       onChange={handleChange} />
                <button type={"submit"} value={"Modifier"} />
            </form>
        </div>
    );
};

export default UserEdit;