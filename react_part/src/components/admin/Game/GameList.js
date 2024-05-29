import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {trailerService} from "../../../services/trailer.service";
import {gameService} from "../../../services/game.service";
import error from "../../../_utils/error";

const GameList = ({game}) => {

    const [trailerName, setTrailerName] = useState();

    let navigate = useNavigate();

    useEffect(() => {
            trailerService.getTrailerByURL(game.trailer)
                .then(res => {
                    setTrailerName(res.data.pathVideo)
                })
                .catch(err => console.log(error))
        },[]
    )

    const handleClick = (gameId) => {
        navigate("../edit/"+gameId);
    }

    return (
        <>
            <div className={"game-id"}>{game.id}</div>
            <div className={"game-email"}>{game.name}</div>
            <button onClick={() => handleClick(game.id)} >Edit</button>

        </>
    );
};

export default GameList;