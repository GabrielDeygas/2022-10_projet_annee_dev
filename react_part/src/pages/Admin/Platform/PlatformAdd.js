import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {platformService} from "../../../services/platform.service";
import error from "../../../_utils/error";


const PlatformAdd = () => {

    let pid = useParams();
    const [data, setData] = useState({})


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('data',data);
        platformService.addPlatform(data)
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
        <div className={"platformadd"}>
            <h1>Ajout d'une platforme</h1>
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={"name"} placeholder={'Name'}
                       onChange={handleChange} />
                <button type={"submit"} value={"Modifier"} />
            </form>
        </div>
    );
};

export default PlatformAdd;