import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import error from "../../../_utils/error";
import {orderService} from "../../../services/order.service";
import OneOrderList from "../../../components/admin/Order/OneOrderList";

import './order.scss';
import './orderEdit.scss'

const OrderEdit = () => {

    let oid = useParams();
    console.log(oid.oid)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        orderService.getAllLignOrdersByOrder(oid.oid)
            .then(res => {
                console.log(res.data["hydra:member"])
                setOrders(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])


    return (
        <div className={"orderedit"}>
            <h1>Recap de la commande ID {oid.oid}</h1>
            <OneOrderList orders={orders} />
        </div>
    );
};

export default OrderEdit;