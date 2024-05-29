import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {platformService} from "../../../services/platform.service";
import error from "../../../_utils/error";


const PlatformEdit = () => {

    let pid = useParams();
    const [platform, setPlatform] = useState([]);
    const [data, setData] = useState({
        name: '',
    })


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('data',data);
        platformService.editPlatform(platform.id, data)
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
        platformService.getPlatform(pid.pid)
            .then(res => {
                console.log(res.data)
                setPlatform(res.data)
            })
            .catch(err => console.log(error))
    }, [])

    console.log(platform.name)

    return (
        <div className={"platformedit"}>
            <h1>edit des platforms</h1>
            <form onSubmit={handleSubmit}>
                <div><p>{platform.id}</p> </div>
                <input type={"text"} name={"name"} defaultValue={platform.name}
                       onChange={handleChange} />
                <button type={"submit"} value={"Modifier"} />
            </form>
        </div>
    );
};

export default PlatformEdit;