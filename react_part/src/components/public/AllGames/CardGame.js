import {Ps4, Xbox, Pc, Switch} from './index';

import './cardGame.scss';
import {Link} from "react-router-dom";

const CardGame = ({game}) => {

    const imgBaseURL = "/games/";

    return (

            <div className={"cardGame-container"}>
                <Link to={`/game/${game.id}`}>
                <div className={"cardGame-title-img-container"}>
                    <h3>{game.name}</h3>
                    <div>
                        <img src={`${imgBaseURL}${game.pathImg}`} alt={`Image pochette de ${game.name}`}/>
                    </div>
                </div>
                <div className={'cardGame-platform-container'}>
                    {
                        game.platform.map( platform => {
                                if(platform.name === 'PlayStation 4') {
                                    return <div className={'cardGame-platform-icon'}><img src={Ps4} alt={'Logo PlayStation'}/></div>
                                }
                                if(platform.name === 'Switch') {
                                    return <div className={'cardGame-platform-icon'}><img src={Switch} alt={'Logo Switch'}/></div>
                                }
                                if(platform.name === 'XboX One') {
                                    return <div className={'cardGame-platform-icon'}><img src={Xbox} alt={'Logo XboX'}/></div>
                                }
                                if(platform.name === 'PC') {
                                    return <div className={'cardGame-platform-icon'}><img src={Pc} alt={'Logo Windows'}/></div>
                                }
                                return null;
                            }
                        )
                    }
                </div>
                </Link>
            </div>
    );
};

export default CardGame;