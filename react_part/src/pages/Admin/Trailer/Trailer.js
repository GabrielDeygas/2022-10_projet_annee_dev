import React, {useEffect, useState} from 'react';
import error from "../../../_utils/error";
import TrailerList from "../../../components/admin/Trailer/TrailerList";
import './trailer.scss'
import {trailerService} from "../../../services/trailer.service";

const Trailer = () => {
    const [trailers, setTrailers] = useState([]);

    useEffect(() => {
        trailerService.getAllTrailers()
            .then(res => {
                console.log(res.data["hydra:member"])
                setTrailers(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])

    return (
        <div className={"trailer"}>
            <div className={"title-trailer"}>
                <h2>Liste des trailers</h2>
            </div>
            {
                trailers.map(trailer => (
                    <div className={"container-trailer-list"} key={trailer.id}>
                        <TrailerList trailer={trailer}/>
                    </div>
                ))
            }
        </div>
    );
};

export default Trailer;