import React, {useEffect, useState} from 'react';
import BgcOrange from "../../_assets/img/backgrounds/bgc_letsplay_buy.png";
import WaveEffect from "../../_assets/img/utils/wave_effect.png";
import {gameService} from "../../services/game.service";
import error from "../../_utils/error";
import '../../style/public/streaming.scss';
import StreamCarouselOneGame from "../../components/public/Streaming/StreamCarouselOneGame";


const StreamGames = () => {

    const [games, setGames] = useState([]);
    const img = [];


    useEffect(() => {
        gameService.getAllGames()
            .then(res => {
                console.log(res.data["hydra:member"])
                setGames(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])


    return (
        <div className={"streaming"}>
            <div className={"banner-container"}>
                <img className={"banner-stream-bgc"} src={BgcOrange} alt={"Coucher de soleil teinté d'orange dans un jeu vidéo"}/>
                <div className={"banner-container-text"}>
                    <h2>Suivez nos <span>LET'S PLAY du moment</span></h2>
                </div>
            </div>
            <div className={"wave-filter-container"}>
                <img className={"banner-waveEffect-stream"} src={WaveEffect} alt={'effet de vague noir'}/>
            </div>
            {
                games.map( game => {
                   return (
                           <div>
                               <StreamCarouselOneGame key={game.id} game={game}/>
                           </div>
                       )
                })
            }
        </div>
    );
};

export default StreamGames;
