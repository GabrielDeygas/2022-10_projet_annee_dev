import React, {useState} from 'react';
import '../../style/public/shoppinglist.scss';
import iconePoubelle from '../../_assets/img/icons/Poubelle.svg'
import ModalShoppingList from "../../components/public/ShoppingList/ModalShoppingList";
import {useNavigate} from "react-router-dom";

const ShoppingList = () => {

    let navigate = useNavigate();

    const [orders,setOrders]        = useState(JSON.parse(localStorage.getItem('shoppingCart')));
    const [takeOrder, setTakeOrder] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [loggedIn, setLoggedIn]   = useState(false);


    let totalPayment = 0;
    console.log(orders);

    orders.forEach( order => {
            totalPayment += order.cle.price
        }
    )

    totalPayment = totalPayment/100;

    const handleDeleteAll = () => {
        let newOrderArr =  orders.filter( o => {
            return false
        })
        setOrders(newOrderArr);
        localStorage.setItem('shoppingCart', JSON.stringify(newOrderArr));
    }

    const handleDelete = (order) => {
        let newOrderArr =  orders.filter( o => {
            return (o.cle.id !== order.cle.id)
        })
        setOrders(newOrderArr);
        localStorage.setItem('shoppingCart', JSON.stringify(newOrderArr));
    }

    const handleTakeOrder = () => {
        setTakeOrder(true)
        setOpenModal(true)
        setLoggedIn(!!(localStorage.getItem('token')))
        if(loggedIn) navigate('/ordering')
    }

    const closeShoppingModal = () => {
        setOpenModal(false)
    }

    return (
        <div className={"shopping-cart"}>
            <h1>Mes achats</h1>
            <div className={"shopping-cartContainer"}>
                    {
                        orders.map( order => {
                            return (
                                <div key={order.id} className={"shopping-infos"}>
                                    <div className={"shopping-containerImg"}>
                                        <img src={`/games/Detail/${order.gameImg}`} alt=""/>
                                    </div>
                                    <div className={"shopping-txtInfos"}>
                                        <div className={"shopping-firstGroupInfos"}>
                                            <div className={"shopping-namePrice"}>
                                                <p className={"shopping-name"}>{order.gameName}</p>
                                                <p className={"shopping-price"}>{order.cle.price/100}€</p>
                                            </div>
                                            <p className={"shopping-platform"}>{order.cle.platform.name}</p>
                                        </div>
                                        <div className={"shopping-containerRemove"}>
                                            <p>Supprimer cet article </p>
                                            <img onClick={() => handleDelete(order)} src={iconePoubelle} alt={"icone de poubelle"} width={30} height={30}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                {
                    (totalPayment > 0) && (
                        <>
                        <h3 className={"shopping-sousTotal right-text"}>SOUS TOTAL : <span className={"shopping-totalPrice"}>{totalPayment}€</span></h3>
                        <div className={"shopping-btnContainer"}>
                            <button className={"shopping-btnDeleteAll"} onClick={(handleDeleteAll)}>Tout supprimer</button>
                            <button className={"shopping-btnOrder"} onClick={handleTakeOrder}>Passer commande</button>
                        </div>
                        </>
                    ) || (
                        <h3 className={"shopping-sousTotal center-text"}>Votre panier est vide</h3>
                    )
                }
            </div>
            {
                (takeOrder && openModal && !loggedIn) && (
                    <ModalShoppingList closeModal={closeShoppingModal} />
                )
            }

        </div>
    );
};

export default ShoppingList;