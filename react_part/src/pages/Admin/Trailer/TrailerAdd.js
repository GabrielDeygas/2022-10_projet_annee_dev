import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {trailerService} from "../../../services/trailer.service";
import error from "../../../_utils/error";


const TrailerAdd = () => {

    let trid = useParams();
    const [data, setData] = useState({})


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('data',data);
        trailerService.addTrailer(data)
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
        <div className={"traileradd"}>
            <h1>Add d'un trailer</h1>
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={"pathVideo"} placeholder={'Path_Video'}
                       onChange={handleChange} />
                <button type={"submit"} value={"Modifier"} />
            </form>
        </div>
    );
};

export default TrailerAdd;