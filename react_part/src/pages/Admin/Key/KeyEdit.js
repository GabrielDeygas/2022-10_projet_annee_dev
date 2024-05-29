import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {keyService} from "../../../services/key.service";
import error from "../../../_utils/error";
import {platformService} from "../../../services/platform.service";
import {gameService} from "../../../services/game.service";


const KeyEdit = () => {

    let kid = useParams();
    const [key, setKey] = useState({});
    const [platforms, setPlatforms] = useState([]);
    const [games, setGames] = useState([]);
    const [data, setData] = useState([])


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('data',data);
        keyService.editKey(key.id, data)
            .then((r) => (alert("Modification effectuée")))
            .catch((err) => alert(err.message))
    }

    const handleChange = (e) => {
        if (e.target.name === "price") {
            setData({
                ...data,
                [e.target.name]: parseInt(e.target.value)
            });
        }  else {
            setData({
                ...data,
                [e.target.name]: e.target.value
            });
        }
    }

    useEffect(() => {
        keyService.getKey(kid.kid)
            .then(res => {
                console.log(res.data)
                    setKey(res.data)
            })
            .catch(err => console.log(error))
    }, [])

    useEffect(() => {
        platformService.getAllPlatforms()
            .then(res => {
                console.log(res.data["hydra:member"])
                setPlatforms(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [key])

    useEffect(() => {
        gameService.getAllGames()
            .then(res => {
                console.log(res.data["hydra:member"])
                setGames(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [key])

    console.log(key)
    console.log(data)

        return (

            <div className={"keyedit"}>
                <h1>edit des keys</h1>
                <form onSubmit={handleSubmit}>
                    <div><p>{key.id}</p></div>
                    <input type={"text"} name={"code"} defaultValue={key.code}
                           onChange={handleChange}/>
                    <input type={"number"} name={"price"} defaultValue={key.price}
                           onChange={handleChange}/>

                    {key.game &&
                        <select name="game" defaultValue={key.game.id} onChange={handleChange}>
                            {games.map( game =>
                                <option value={'/api/games/'+game.id}>{game.name}</option>
                            )}
                        </select> }
                    {key.platform &&
                        <select name="platform" defaultValue={key.platform.id} onChange={handleChange}>
                            {platforms.map( platform =>
                                <option value={'/api/platforms/'+platform.id}>{platform.name}</option>
                                )}
                        </select>}

                    <button type={"submit"} value={"Modifier"}/>
                </form>
            </div>
        );

};

export default KeyEdit;