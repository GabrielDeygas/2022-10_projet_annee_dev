import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {typeService} from "../../../services/type.service";
import error from "../../../_utils/error";


const TypeEdit = () => {

    let tyid = useParams();
    const [type, setType] = useState([]);
    const [data, setData] = useState({
        name: '',
    })


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('data',data);
        typeService.editTypes(type.id, data)
            .then((r) => (alert("Modification effectuée")))
            .catch((err) => alert(err.message))
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        typeService.getType(tyid.tyid)
            .then(res => {
                console.log(res.data)
                setType(res.data)
            })
            .catch(err => console.log(error))
    }, [])

    console.log(type.name)

    return (
        <div className={"typeedit"}>
            <h1>edit des types</h1>
            <form onSubmit={handleSubmit}>
                <div><p>{type.id}</p> </div>
                <input type={"text"} name={"name"} defaultValue={type.name}
                       onChange={handleChange} />
                <button type={"submit"} value={"Modifier"} />
            </form>
        </div>
    );
};

export default TypeEdit;