import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {typeService} from "../../../services/type.service";
import error from "../../../_utils/error";


const TypeAdd = () => {

    let tyid = useParams();
    const [data, setData] = useState({})


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('data',data);
        typeService.addType(data)
            .then((r) => (alert("Modification effectuée")))
            .catch((err) => alert(err.message))
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className={"typeedit"}>
            <h1>Ajout d'un type</h1>
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={"name"} placeholder={'Name'}
                       onChange={handleChange} />
                <button type={"submit"} value={"Modifier"} />
            </form>
        </div>
    );
};

export default TypeAdd;