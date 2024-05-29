import React from 'react';
import {useNavigate} from "react-router-dom";
import {accountService} from "../../services/account.service";

const AHeader = () => {

    let navigate = useNavigate();

    const logout = () => {
        accountService.logout();
        navigate("/")
    }

    return (
        <div className={"AHeader"}>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default AHeader;