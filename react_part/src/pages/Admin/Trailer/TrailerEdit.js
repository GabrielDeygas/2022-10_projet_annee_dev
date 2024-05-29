import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {trailerService} from "../../../services/trailer.service";
import error from "../../../_utils/error";


const TrailerEdit = () => {

        let trid = useParams();
        const [trailer, setTrailer] = useState([]);
        const [data, setData] = useState({
            pathVideo: '',
        })


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('data',data);
        trailerService.editTrailer(trailer.id, data)
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
        trailerService.getTrailer(trid.trid)
            .then(res => {
                console.log(res.data)
                setTrailer(res.data)
            })
            .catch(err => console.log(error))
    }, [])

    console.log(trailer.pathVideo)

    return (
        <div className={"traileredit"}>
            <h1>edit des trailers</h1>
            <form onSubmit={handleSubmit}>
                <div><p>{trailer.id}</p></div>
                <input type={"text"} name={"pathVideo"} defaultValue={trailer.pathVideo}
                       onChange={handleChange} />
                <button type={"submit"} value={"Modifier"} />
            </form>
        </div>
    );
};

export default TrailerEdit;