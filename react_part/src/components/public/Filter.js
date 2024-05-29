import React, {useEffect, useState} from 'react';

import '../../style/filter.scss';
import {typeService}
    from "../../services/type.service";
import error from "../../_utils/error";
import {platformService} from "../../services/platform.service";

const Filter = ({filterPlatforms, filterTypes}) => {

    const [types, setTypes] = useState([]);
    const [platforms, setPlatforms] = useState([]);


    useEffect(() => {
        typeService.getAllTypes()
            .then(res => {
                setTypes(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])

    useEffect(() => {
        platformService.getAllPlatforms()
            .then(res => {
                setPlatforms(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])


    const handleType = (t) => {
        filterTypes(t.name)
    }

    const handlePlatform = (p) => {
        filterPlatforms(p.name)
    }


    return (
        <form className={"filter-form"}>
            <input className={"filter-searchGameName"} type={"text"} placeholder={"Recherche..."}/>
            <div>

            </div>
            <select className={"filter-select-types"} name="types">
                <option>Genre</option>
                {
                    types.map( type =>
                        <option key={'type'+type.id} onClick={() => handleType(type)} >{type.name}</option>
                    )
                }
            </select>
            <select className={"filter-select-platforms"} name="types">
                <option>Platform</option>
                {
                    platforms.map( platform =>
                        <option key={'platform'+platform.id} onClick={() => handlePlatform(platform)}>{platform.name}</option>
                    )
                }
            </select>
        </form>
    );
};

export default Filter;