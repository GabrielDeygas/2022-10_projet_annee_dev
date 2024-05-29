import React from 'react';
import {Link} from "react-router-dom";

const SideMenu = () => {
    return (
        <div className={"sideMenu"}>
            <ul>
                <li><Link to={"/"}>Liste des jeux</Link></li>
                <li>&nbsp;</li>
                <li><Link to={"dashboard"}>Dashboard</Link></li>
                <li>
                    Games
                    <ul>
                        <li><Link to={"/admin/game/index"}>Liste des Games</Link></li>
                        <li><Link to={"/admin/game/add"}>Ajouter des Games</Link></li>
                    </ul>
                </li>
                <li>
                    Keys
                    <ul>
                        <li><Link to={"/admin/key/index"}>Liste des Keys</Link></li>
                        <li><Link to={"/admin/key/add"}>Ajouter des Keys</Link></li>
                    </ul>
                </li>
                <li>
                    Order
                    <ul>
                        <li><Link to={"/admin/order/index"}>Liste des Order</Link></li>
                    </ul>
                </li>
                <li>
                    Platforms
                    <ul>
                        <li><Link to={"/admin/platform/index"}>Liste des Platforms</Link></li>
                        <li><Link to={"/admin/platform/add"}>Ajouter des Platforms</Link></li>
                    </ul>
                </li>
                <li>
                    Trailers
                    <ul>
                        <li><Link to={"/admin/trailer/index"}>Liste des Trailers</Link></li>
                        <li><Link to={"/admin/trailer/add"}>Ajouter des Trailers</Link></li>
                    </ul>
                </li>
                <li>
                    Types
                    <ul>
                        <li><Link to={"/admin/type/index"}>Liste des Types</Link></li>
                        <li><Link to={"/admin/type/add"}>Ajouter des Types</Link></li>
                    </ul>
                </li>
                <li>
                    Users
                    <ul>
                        <li><Link to={"/admin/user/index"}>Liste des Users</Link></li>
                        <li><Link to={"/admin/user/add"}>Ajouter des Users</Link></li>
                    </ul>
                </li>
                <li>
                    VideoYT
                    <ul>
                        <li><Link to={"/admin/videoyt/index"}>Liste des VideoYT</Link></li>
                        <li><Link to={"/admin/videoyt/add"}>Ajouter des VideoYT</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;