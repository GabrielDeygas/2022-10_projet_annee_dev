import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {gameService} from "../../../services/game.service";
import ApiAxios from "../../../services/caller.service";
import error from "../../../_utils/error";

const TypeList = ({video}) => {

    const [gameName, setGameName] = useState();

    let navigate = useNavigate();

    useEffect(() => {
            gameService.getGameByURL(video.game)
                .then(res => {
                    setGameName(res.data.name)
                })
                .catch(err => console.log(error))
    },[]
    )

    const handleClick = (vidId) => {
        navigate("../edit/"+vidId);
    }

    return (
        <>
            <div className={"videoyt-id"}>{video.id}</div>
            <div className={"videoyt-gameId"}>{gameName}</div>
            <div className={"videoyt-link"}>{video.link}</div>
            <div className={"videoyt-youtuber"}>{video.youtuber}</div>
            <div className={"videoyt-episode"}>{video.episode}</div>
            <button onClick={() => handleClick(video.id)} >Edit</button>
        </>
    );
};

export default TypeList;