import React, {useEffect, useState} from "react";
import {gameService} from "../../../services/game.service";
import error from "../../../_utils/error";
import GameList from "../../../components/admin/Game/GameList";
import './game.scss'

const Game = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAllGames()
            .then(res => {
                console.log(res.data["hydra:member"])
                setGames(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])

    return (
        <div className={"game"}>
            <div className={"title-game"}>
                <h2>Liste des games</h2>
            </div>
            {
                games.map(game => (
                    <div className={"container-game-list"} key={game.id}>
                        <GameList game={game}/>
                    </div>
                ))
            }
        </div>
    );
};

export default Game;