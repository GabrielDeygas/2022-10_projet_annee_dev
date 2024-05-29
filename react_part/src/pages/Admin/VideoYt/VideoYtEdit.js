import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {videoytService} from "../../../services/videoYT.service";
import error from "../../../_utils/error";
import {gameService} from "../../../services/game.service";


const VideoYTEdit = () => {

    let vyt = useParams();
    const [videoYT, setVideoYT] = useState({});
    const [game, setGame] = useState({});
    const [allGames, setAllGames] = useState([]);
    const [data, setData] = useState({});


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('data',data);
        videoytService.editVideoYT(videoYT.id, data)
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
        videoytService.getVideoYT(vyt.vyt)
            .then(res => {
                console.log(res.data)
                setVideoYT(res.data)
            })
            .catch(err => console.log(error))
    }, [])


    useEffect(() => {
        gameService.getAllGames()
            .then(res => {
                console.log(res.data)
                setAllGames(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [game])

    console.log(allGames)

    return (
        <div className={"videoytedit"}>
            <h1>edit des videoYT</h1>
            <form onSubmit={handleSubmit}>
                <div><p>{videoYT.id}</p> </div>
                <input type={"text"} name={"link"} defaultValue={videoYT.link}
                       onChange={handleChange} />
                <input type={"text"} name={"youtuber"} defaultValue={videoYT.youtuber}
                       onChange={handleChange} />
                <input type={"text"} name={"episode"} defaultValue={videoYT.episode}
                       onChange={handleChange} />

                <select name={"game"} onChange={handleChange}>
                    {
                        allGames.map(game => {
                            return(
                                <option key={game.id} name={"optiongame"} value={`/api/games/${game.id}`}>{game.name}</option>)
                            }
                        )
                    }
                </select>
                <button type={"submit"} value={"Modifier"} />
            </form>
        </div>
    );
};

export default VideoYTEdit;