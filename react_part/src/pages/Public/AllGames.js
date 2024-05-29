import React, {useEffect, useState} from 'react';

import '../../style/public/buyGames.scss';
import BgcOrange from '../../_assets/img/backgrounds/bgc_letsplay_buy.png';
import WaveEffect from '../../_assets/img/utils/wave_effect.png';
import {gameService} from "../../services/game.service";
import error from "../../_utils/error";
import Filter from "../../components/public/Filter";
import CardGame from "../../components/public/AllGames/CardGame";
import {accountService} from "../../services/account.service";
import jwtDecode from "jwt-decode";


const AllGames = () => {

    const [games, setGames]                         = useState([]);
    const [selectedPlatform, setSelectedPlatform]   = useState(null);
    const [selectedType, setSelectedType]           = useState(null);

    const img = [];

    useEffect(() => {
        gameService.getAllGames()
            .then(res => {
                console.log(res.data["hydra:member"])
                setGames(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])

    games.map( game =>
            img.push(game.pathImg)
    )

    const filterTypes = (typeName) => {
        setSelectedType(typeName)
    }

    const filterPlatforms = (platformName) => {
        setSelectedPlatform(platformName)
        }

        if(accountService.isLogged()) {
            console.log(jwtDecode(accountService.getToken('token')))
        }

    return (
        <div className={"AllGames"}>
            <div className={"banner-container"}>
                <img className={"banner-buygames-bgc"} src={BgcOrange} alt={"Coucher de soleil teinté d'orange dans un jeu vidéo"}/>
                <div className={"banner-container-text"}>
                    <h2><span>Achetez les jeux</span> qui vous plaisent</h2>
                </div>
            </div>
            <div className={"wave-filter-container"}>
                <img className={"banner-waveEffect"} src={WaveEffect} alt={'effet de vague noir'}/>
                <div className={"filter-container"}>
                    <Filter filterPlatforms={filterPlatforms} filterTypes={filterTypes}/>
                </div>
            </div>


            <div className={"buyGames-main"}>
                <h3 className={"buyGames-h3"}>Tous nos jeux</h3>

                <div className={'allCard-container'}>
                    {
                            games.map(game => {
                               let platforms = game.platform.map(plat => plat.name)
                               let types = game.types.map(type => type.name)
                               if(selectedType && !(types.includes(selectedType))) return null
                               if(selectedPlatform && !(platforms.includes(selectedPlatform))) return null
                                return <CardGame key={'gameCard'+game.id} game={game} />
                            })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllGames;