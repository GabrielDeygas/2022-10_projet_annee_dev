import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {gameService} from "../../../services/game.service";
import error from "../../../_utils/error";
import {userService} from "../../../services/user.service";

const OrderList = ({order}) => {

    const [userId, setUserId] = useState();

    let navigate = useNavigate();

    const handleClick = (orderId) => {
        navigate("../edit/"+orderId);
    }

    useEffect(() => {
            userService.getUserByURL(order.user)
                .then(res => {
                    setUserId(res.data.id)
                })
                .catch(err => console.log(error))
        },[]
    )

    return (
        <>
            <div className={"order-id"}>{order.id}</div>
            <div className={"order-user"}>{userId}</div>
            <div className={"order-company"}>{order.companyName}</div>
            <div className={"order-orderstripe"}>{order.orderStripeId}</div>
            <button onClick={() => handleClick(order.id)} >Edit</button>
        </>
    );
};

export default OrderList;