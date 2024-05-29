import React from 'react';
import './modalshoppinglist.scss';
import {Link} from "react-router-dom";

import order from '../../../_assets/img/order.webp';

const ModalShoppingList = ({closeModal}) => {

    const handleConnect = () => {
        window.alert("BIENTOT")
    }

    return (
        <div className={"modalShopping-container"} onClick={closeModal}>
            <div className={"modalShopping-containerInfos"}>
                <h4 className={"modalShopping-title"}>Comment voulez-vous passer commande ?</h4>
                <img src={order} alt={"Fallout Guy"} />
                <div>
                    <button className={"modalShopping-btnUser"} onClick={handleConnect}>Je me connecte</button>
                    <button className={"modalShopping-btnVisitor"}><Link to={"/ordering"}>Je reste visiteur</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ModalShoppingList;