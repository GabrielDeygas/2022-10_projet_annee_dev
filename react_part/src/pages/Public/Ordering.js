import React, {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {gameService} from "../../services/game.service";
import jwtDecode from "jwt-decode";
import {orderService} from "../../services/order.service";
import error from "../../_utils/error";
import {accountService} from "../../services/account.service";


const Ordering = () => {

    const form = useRef();

    const [userInfos, setUserInfos] = useState(null);
    const [userOrder, setUserOrder] = useState(null);
    const [billInfos, setBillInfos] = useState({
    });

    let userOrderVar = JSON.parse(localStorage.getItem('shoppingCart'));


    const handleSubmit = (evt) => {
        evt.preventDefault();
        emailjs.send('service_g731wjq', 'template_vr0xqwk', billInfos, 'YdaMg4sHfuLqZqvRo')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
        emailjs.send('service_g731wjq', 'template_vr0xqwk', billInfos, 'YdaMg4sHfuLqZqvRo')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
        evt.target.reset();
    }

     const onChange = (e) => {
         setBillInfos({
             ...billInfos,
             [e.target.name]: e.target.value
         });
         console.log(billInfos);
     }

    return (
        <>
            <h2 className={"register-title"}>Paiement</h2>
            <form ref={form} className={"form-register"} onSubmit={handleSubmit}>
                <div className={"group-register"}>
                    <label htmlFor={"email"}>Votre email</label>
                    <input type="text" name={"email"} onChange={onChange}/>
                </div>
                <div className={"group-register"}>
                    <label htmlFor={"firstname"}>Votre prénom</label>
                    <input type="text" name={"firstname"} onChange={onChange}/>
                </div>
                <div className={"group-register"}>
                    <label htmlFor={"lastname"}>Votre nom</label>
                    <input type="text" name={"lastname"} onChange={onChange}/>
                </div>
                <div className={"group-register"}>
                    <label htmlFor={"creditcard"}>Votre numéro de carte</label>
                    <input type="number" name={"creditcard"} onChange={onChange}/>
                </div>
                <div className={"button-register"}>
                    <button className={"btn-create"} type={"submit"}>Payer</button>
                </div>
            </form>
        </>
    );
};

export default Ordering;