import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import {accountService} from "../../services/account.service";

import './auth.scss';


const Login = () => {
    let navigate = useNavigate();

const [credentials, setCredentials] = useState({
    username: '',
    password: ''
});

const handleSubmit = (e) => {
    e.preventDefault();
        accountService.login(credentials)
        .then(res => {
            accountService.saveToken(res.data.token)
            navigate('/admin')})
        .catch(console.error);
}

const registerSubmit = () => {
    navigate('/inscription')
}

const onChange = (e) => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
    console.log(credentials);
}

    return (
        <form className={"form-login"} onSubmit={handleSubmit}>
            <div className={"group"}>
                <label htmlFor={"login"}>Votre email</label>
                <input type="text" name="username" value={credentials.username} onChange={onChange} />
            </div>
            <div className={"group"}>
                <label htmlFor={"password"}>Votre mot de passe</label>
                <input type="password" name="password" value={credentials.password} onChange={onChange} />
            </div>
            <div className={"button-auth"}>
                <button className={"btn-register"} onClick={registerSubmit}>Inscription</button>
                <button className={"btn-connect"} type={"submit"}>Connexion</button>
            </div>
        </form>
        );
};

export default Login;