import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {gameService} from "../../services/game.service";
import error from "../../_utils/error";
import ReactPlayer from "react-player";

import "../../style/public/detailGame.scss"
import {Pc, Ps4, Switch, Xbox} from "../../components/public/AllGames";
import BgcLightGrey from "../../_assets/img/backgrounds/bgc_detail.png";
import order from "../Admin/Order/Order";

const DetailGame = () => {

    let gameIdObj                               = useParams();
    const [game, setGame]                       = useState({});
    const [platforms, setPlatforms]             = useState([]);
    const [types, setTypes]                     = useState([]);
    const [keys, setKeys]                       = useState([]);
    const [theGameKey, setTheGameKey]           = useState(null);
    const [orders, setOrders]                   = useState({});
    const [thePrice, setThePrice]               = useState('');
    const [trailer, setTrailer]                 = useState('');
    const [orderedMessage, setOrderedMessage ]  = useState('');
    const imgBaseURL                            = "/games/Detail/";
    const videoPath                             = `/trailer/${trailer}`;

    useEffect(() => {
        gameService.getGame(gameIdObj.id)
            .then(res => {
                setGame(res.data)
                setPlatforms(res.data.platform)
                setTypes(res.data.types)
                setTrailer(res.data.trailer.pathVideo)
                setKeys(res.data.gameKeys)
            })
            .catch(err => error)
    },[gameIdObj]) ;


    const handleClickPlatform = (platform) => {
        setOrderedMessage('');
        let keysArr = keys.filter( key => {
            return (key.platform.name === platform && key.soldOut === null)
        })
        keysArr.sort(function (a, b) {
            return a.price - b.price;
        })
        if(keysArr.length > 0) {
            setThePrice(`${keysArr[0].price/100}€`)
            setTheGameKey({
                cle: keysArr[0],
                gameName: game.name,
                gameImg: game.pathImg
            })
        } else {
            setThePrice('Pas en stock')
        }
    }

    const handleClickBasket = () => {
        if (theGameKey) {

            let shoppingCart = localStorage.getItem('shoppingCart');
            if (shoppingCart) {
                shoppingCart = JSON.parse(shoppingCart)
            } else {
               shoppingCart = []
            }
            shoppingCart.push(theGameKey)
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

            setOrderedMessage("Votre jeu a bien été ajouté au panier");
        }
    }

    console.log(game)


    let dateRelease = game.dateRelease;
    dateRelease = Date.parse(dateRelease);
    dateRelease = new Date(dateRelease)
    dateRelease = dateRelease.toLocaleDateString("fr")

    console.log(dateRelease)
    console.log(videoPath)
    console.log(keys)
    console.log(theGameKey)
    console.log(types)
    console.log(platforms)

    return (
    <div className={"detailGame"}>
        <div className={"banner-container"}>
            <img className={"banner-detail-bgc"} src={BgcLightGrey} alt={"Coucher de soleil teinté d'orange dans un jeu vidéo"}/>
            <div className={"banner-container-text"}>
                <h2><span>Achetez les jeux</span> qui vous plaisent</h2>
            </div>
        </div>
        <div className={"detailGame-container"}>
            <div className={"detailmainInfos-container"}>
                <div className={'detailImg-container'}>
                    <img src={`${imgBaseURL}${game.pathImg}`} alt={`Image pochette de ${game.name}`}/>
                </div>

                <div className={"detailNamePlatPrice-container"}>
                    <h2 className={"game-name-detail"}>{game.name}</h2>
                    <div className={'detailGame-platform-container'}>
                        {
                            platforms.map( platform => {
                                    if(platform.name === 'PlayStation 4') {
                                        return <button key={'ps'} className={'detailGame-platform-icon detail-btn-ps'} onClick={() => handleClickPlatform(platform.name)}><img className={'blackOnFilter'} src={Ps4} alt={'Logo PlayStation'}/></button>
                                    }
                                    if(platform.name === 'Switch') {
                                        return <button key={'switch'} className={'detailGame-platform-icon detail-btn-sw'} onClick={() => handleClickPlatform(platform.name)}><img className={'blackOnFilter'} src={Switch} alt={'Logo Switch'}/></button>
                                    }
                                    if(platform.name === 'XboX One') {
                                        return <button key={'xbox'} className={'detailGame-platform-icon detail-btn-xb'} onClick={() => handleClickPlatform(platform.name)}><img className={'blackOnFilter'} src={Xbox} alt={'Logo XboX'}/></button>
                                    }
                                    if(platform.name === 'PC') {
                                        return <button key={'pc'} className={'detailGame-platform-icon detail-btn-pc'} onClick={() => handleClickPlatform(platform.name)}><img className={'blackOnFilter'} src={Pc} alt={'Logo Windows'}/></button>
                                    }
                                    return null
                                }
                            )
                        }
                    </div>
                    <h3 className={"detailGame-price"}>{thePrice}</h3>
                    <button className={"detailGame-addBasket"} onClick={handleClickBasket}>Ajouter au panier</button>
                    {(orderedMessage.length > 0 ) && <span className={'detailGame-ordered'}>{orderedMessage}</span>}
                </div>
            </div>
            <p className={"details-description"}>{game.description}</p>
            <div className={'details-containerInfos'}>
                <div className={'details-containerDevType'}>
                    <p className={"details-dev"}>Développeur: <span className={"details-devName"}>{game.developer}</span></p>
                    <p className={"details-type"}> Genres:
                        {
                            types.map( type => {
                            return <span className={'details-typeName'} key={'type'+type.name}> {type.name} </span>
                        })
                    }
                    </p>
                </div>
                <div >
                    <p className={"details-date"}>Date de Sortie: <span>{dateRelease}</span></p>
                    <p className={"details-editor"}>Editeur: <span>{game.editor}</span></p>
                </div>

            </div>
        </div>
        <div className={"details-containerVideo"}>

            <h2 className={'details-videoGameName'}>Bande-annonce : {game.name}</h2>
            <ReactPlayer className={"details-video"} url ={videoPath} controls width={1088} height={612}/>
        </div>
    </div>


    );
};

export default DetailGame;