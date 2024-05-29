import React, {useEffect, useState} from "react";
import {orderService} from "../../../services/order.service";
import error from "../../../_utils/error";
import OrderList from "../../../components/admin/Order/OrderList";
import './order.scss'

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        orderService.getAllOrders()
            .then(res => {
                console.log(res.data["hydra:member"])
                setOrders(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])

    return (
        <div className={"order"}>
            <div className={"title-order"}>
                <h2>Liste des orders</h2>
            </div>
            {
                orders.map(order => (
                    <div className={"container-order-list"} key={order.id}>
                        <OrderList order={order}/>
                    </div>
                ))
            }
        </div>
    );
};

export default Order;