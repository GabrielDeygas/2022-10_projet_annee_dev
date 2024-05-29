import React, {useEffect, useState} from "react";
import {platformService} from "../../../services/platform.service";
import error from "../../../_utils/error";
import PlatformList from "../../../components/admin/Platform/PlatformList";
import './platform.scss'

const Platform = () => {
    const [platforms, setPlatforms] = useState([]);

    useEffect(() => {
        platformService.getAllPlatforms()
            .then(res => {
                console.log(res.data["hydra:member"])
                setPlatforms(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])

    return (
        <div className={"platform"}>
            <div className={"title-platform"}>
                <h2>Liste des platforms</h2>
            </div>
            {
                platforms.map(platform => (
                    <div className={"container-platform-list"} key={platform.id}>
                        <PlatformList platform={platform}/>
                    </div>
                ))
            }
        </div>
    );
};

export default Platform;