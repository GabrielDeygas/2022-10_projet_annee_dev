import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {gameService} from "../../../services/game.service";
import {platformService} from "../../../services/platform.service";
import error from "../../../_utils/error";

const KeyList = ({keyList}) => {

    let navigate = useNavigate();


    const handleClick = (keyId) => {
        navigate("../edit/"+keyId);
    }

    return (
        <>
            <div className={"keyList-id"}>{keyList.id}</div>
            <div className={"keyList-gameName"}>{keyList.game.name}</div>
            <div className={"keyList-platformName"}>{keyList.platform.name}</div>
            <div className={"keyList-soldout"}>{keyList.soldOut}</div>
            <div className={"keyList-price"}>{keyList.price /100}€</div>
            <button onClick={() => handleClick(keyList.id)} >Edit</button>
        </>
    );
};

export default KeyList;