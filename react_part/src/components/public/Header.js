import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {accountService} from "../../services/account.service";

import '../../style/header.scss';
import logo from '../../_assets/img/logo/Logo.svg'
import basket from '../../_assets/img/icons/Icone_panier.svg'
import disconnect from '../../_assets/img/icons/Disconnect.svg';




const Header = () => {

    let navigate = useNavigate();

    const logout = () => {
        accountService.logout();
        navigate("/")
    }

    return (
            <header className={"pheader"}>
                <div className={"header-container"}>
                        <img className={"logo-img-header"} src={logo} alt={"logo Watch and Play"}/>
                    <nav>
                        <ul>
                            <div className={"li-blank-space"}></div>
                            <div className={"li-pages"}>
                                <li className={"li-group1"}><Link to={"/"}>Achat jeux</Link></li>
                                <li className={"li-group1"}><Link to={"/stream"}>Let's Play</Link></li>
                            </div>
                            <div className={"li-account"}>
                                <li className={"li-group2"}><Link to={"/shopping-list"}>
                                    <img className={"li-basket-img"} src={basket} alt={"icone panier"}/>
                                </Link></li>
                                <li className={"li-group2 li-admin"}><Link to={"/admin"}>A</Link></li>
                            </div>
                        </ul>
                    </nav>
                </div>
                <button className={"btn-disconnect"} onClick={logout}><img src={disconnect} alt={"bouton déconnexion"} /></button>
            </header>
    );
};

export default Header;