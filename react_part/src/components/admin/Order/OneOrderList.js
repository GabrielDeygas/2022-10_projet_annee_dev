import React from 'react';

const OneOrderList = ({orders}) => {



    return (
        <div className={"container-orders"} >
            {
                orders.map( order =>
                    <div className={"container-ligns"} key={order.id}>
                        <div className={"order-id"}>{order.id}</div>
                        <div className={"order-keycode"}>{order.keytable.code}</div>
                        <div className={"order-keyprice"}>{order.keytable.price / 100} €</div>
                        <div className={"order-gamename"}>{order.keytable.game.name}</div>
                    </div>
                )
            }
        </div>
    );
};

export default OneOrderList;