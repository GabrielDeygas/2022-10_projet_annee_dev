import React, {useEffect, useState} from 'react';
import {userService} from "../../../services/user.service";
import error from "../../../_utils/error";
import UserList from "../../../components/admin/User/UserList";
import './user.scss'

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(res => {
                console.log(res.data["hydra:member"])
                setUsers(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])



    return (
        <div className={"user"}>
            <div className={"title-user"}>
                <h2>Liste des utilisateurs</h2>
            </div>
            {
                        users.map(user => (
                            <div className={"container-user-list"} key={user.id}>
                                <UserList user={user}/>
                            </div>
                        ))
                    }
        </div>
    );
};

export default User;