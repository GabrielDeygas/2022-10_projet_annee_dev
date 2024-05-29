import React, {useState} from 'react';

import '../../style/public/inscription.scss';
import {userService} from "../../services/user.service";
import {useNavigate} from "react-router-dom";

const Inscription = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        plainPassword: '',
        nickname: '',
        firstname: '',
        lastname: '',
        customerIdStripe: '',
        role: 'user',
        isActive: true
    });

    const registerSubmit = (e) => {
        e.preventDefault();
        userService.addUser(user)
            .then((r) => {
                alert('Utilisateur créé')
                navigate('/')
            })
            .catch((err) => console.log(err.message))
    }

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        console.log(user);
    }

    return (
        <>
            <h2 className={"register-title"}>Inscrivez-vous</h2>
            <form className={"form-register"} onSubmit={registerSubmit}>
                    <div className={"group-register"}>
                    <label htmlFor={"email"}>Votre email</label>
                    <input type="text" name={"email"} onChange={onChange}/>
                </div>
                <div className={"group-register"}>
                    <label htmlFor={"plainPassword"}>Votre mot de passe</label>
                    <input type="password" name={"plainPassword"} onChange={onChange}/>
                </div>
                <div className={"group-register"}>
                    <label htmlFor={"nickname"}>Votre pseudo</label>
                    <input type="text" name={"nickname"} onChange={onChange}/>
                </div>
                <div className={"group-register"}>
                    <label htmlFor={"firstname"}>Votre prénom</label>
                    <input type="text" name={"firstname"} onChange={onChange}/>
                </div>
                <div className={"group-register"}>
                    <label htmlFor={"lastname"}>Votre nom</label>
                    <input type="text" name={"lastname"} onChange={onChange}/>
                </div>
                <div className={"group-register"}>
                    <label htmlFor={"customerIdStripe"}>Votre id compte</label>
                    <input type="text" name={"customerIdStripe"} onChange={onChange}/>
                </div>
                <div className={"button-register"}>
                    <button className={"btn-create"} type={"submit"}>Inscrivez-vous</button>
                </div>
            </form>
        </>
    );
};

export default Inscription;