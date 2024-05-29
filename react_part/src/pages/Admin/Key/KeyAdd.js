import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {keyService} from "../../../services/key.service";
import error from "../../../_utils/error";
import {platformService} from "../../../services/platform.service";
import {gameService} from "../../../services/game.service";


const KeyAdd = () => {

    let kid = useParams();
    const [platforms, setPlatforms] = useState([]);
    const [games, setGames] = useState([]);
    const [data, setData] = useState({})


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('data',data);
        keyService.addKey(data)
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
        platformService.getAllPlatforms()
            .then(res => {
                console.log(res.data["hydra:member"])
                setPlatforms(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])

    useEffect(() => {
        gameService.getAllGames()
            .then(res => {
                console.log(res.data["hydra:member"])
                setGames(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])

    console.log(data)

    return (

        <div className={"keyedit"}>
            <h1>Ajout d'un key</h1>
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={"code"} placeholder={'key_code'}
                       onChange={handleChange}/>
                <input type={"number"} name={"price"} placeholder={"key_price"}
                       onChange={handleChange}/>

                    <select name="game" onChange={handleChange}>
                        {games.map( game =>
                            <option value={'/api/games/'+game.id}>{game.name}</option>
                        )}
                    </select>

                    <select name="platform" onChange={handleChange}>
                        {platforms.map( platform =>
                            <option value={'/api/platforms/'+platform.id}>{platform.name}</option>
                        )}
                    </select>

                <button type={"submit"} value={"Modifier"}/>
            </form>
        </div>
    );

};

export default KeyAdd;