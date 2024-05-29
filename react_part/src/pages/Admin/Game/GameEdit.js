import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import error from "../../../_utils/error";
import platform from "../Platform/Platform";
import {platformService} from "../../../services/platform.service";
import {gameService} from "../../../services/game.service";
import {typeService} from "../../../services/type.service";
import {trailerService} from "../../../services/trailer.service";


const GameEdit = () => {

    let gid = useParams();
    const [game, setGame] = useState({});
    const [types, setTypes] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [data, setData] = useState({
        platform: [],
        types: []
    })


    const handleSubmit = (e) => {

        e.preventDefault();
        gameService.editGame(game.id, data)
            .then((r) => (alert("Modification effectuée")))
            .catch((err) => alert(err.message))

    }

    const handleChange = (e) => {
            setData({
                ...data,
                [e.target.name]: e.target.value
            });
        }

    const handleChangePlatforms = (e) => {

        if (data.platform.includes(e.target.value)) {
            const platformsAddedUpdate = data.platform.filter(platform => platform !== e.target.value)
            setData({
                ...data,
                platform: platformsAddedUpdate
            })
        } else {
            setData({
                ...data,
                platform: [...data.platform, e.target.value]
            })
        }
    }

    const handleChangeTypes = (e) => {

        if (data.types.includes(e.target.value)) {
            const typesAddedUpdate = data.types.filter(type => type !== e.target.value)
            setData({
                ...data,
                types: typesAddedUpdate
            })
        } else {
            setData({
                ...data,
                types: [...data.types, e.target.value]
            })
        }
    }


    useEffect(() => {
        gameService.getGame(gid.gid)
            .then(res => {
                setGame(res.data)
            })
            .catch(err => console.log(error))
    }, [])

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

    useEffect(() => {
        trailerService.getAllTrailers()
            .then(res => {
                setTrailers(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])

    console.log(data)

    return (

        <div className={"gameedit"}>
            <h1>edit des games</h1>
            <form onSubmit={handleSubmit}>
                <div><p>{game.id}</p></div>
                <input type={"text"} name={"name"} defaultValue={game.name}
                       onChange={handleChange}/>
                <input type={"text"} name={"developer"} defaultValue={game.developer}
                       onChange={handleChange}/>
                <input type={"text"} name={"editor"} defaultValue={game.editor}
                       onChange={handleChange}/>
                <input type={"text"} name={"pathImg"} defaultValue={game.pathImg}
                       onChange={handleChange}/>
                <input type={"date"} name={"dateRelease"} defaultValue={game.dateRelease}
                       onChange={handleChange}/>
                <textarea name={"description"} defaultValue={game.description}
                       onChange={handleChange}/>
                <fieldset onChange={handleChangeTypes}>
                    <legend>Genre du jeu</legend>
                    {types.map( type =>
                        <div key={type.id}>
                            <input type="checkbox" id={'/api/types/'+type.id} name="types"
                                   value={'/api/types/'+type.id}/>
                            <label htmlFor={'/api/types/'+type.id} >{type.name}</label>
                        </div>
                    )}
                </fieldset>
                <fieldset onChange={handleChangePlatforms}>
                    <legend>Plateforme du jeu</legend>
                    {platforms.map( platform =>
                        <div key={platform.id}>
                            <label htmlFor={platform.id}>
                            <input type="checkbox" id={platform.id} name={"platform"}
                                   value={'/api/platforms/'+platform.id}/>
                            {platform.name}
                            </label>
                        </div>
                    )}
                </fieldset>
                <select name={"trailer"} onChange={handleChange}>
                    {
                        trailers.map(trailer => {
                                return(
                                    <option key={trailer.id} name={"trailer"} value={`/api/trailers/${trailer.id}`}>{trailer.pathVideo}</option>)
                            }
                        )
                    }
                </select>

                <button className={'submit'} type={"submit"} value={"Modifier"}/>
            </form>
        </div>
    );

};

export default GameEdit;