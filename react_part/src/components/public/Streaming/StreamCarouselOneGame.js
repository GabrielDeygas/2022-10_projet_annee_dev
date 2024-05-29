import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './streamcarouselonegame.scss';
import ReactPlayer from "react-player";
import ModalEpisode from "./ModalEpisode";

const StreamCarouselOneGame = (game) => {

    const [openModal, setOpenModal]             = useState(false);
    const [selectedEpisode, setSelectedEpisode] = useState(null);

    game = game.game;


    const handleClickCard = (name, episode) => {
        if (!(openModal)) {
            setOpenModal(true);
            setSelectedEpisode({name, episode})
        }
    }

    function closeModal() {
        setOpenModal(false)
    }

    return (
        <>
            <h3 className={"carousel-h3"}>{game.name}</h3>
            <Carousel
                centerMode={true}
                centerSlidePercentage={24}
                showIndicators={false}
                transitionTime={300}
                width={1200}
                selectedItem={1.7}
                showStatus={false}
                swipeable={true}
                showArrows={true}
                showThumbs={false}
            >
                {
                    game.videoYoutubes.map( episode => {
                        return (
                            <div className={"carousel-containerEpisode"} onClick={() => handleClickCard(game.name, episode)}>
                                <div className={"carousel-containerInsideEpisode"}>
                                    <div className={"carousel-containerImg"}>
                                        <img className={"carousel-imgEpisode"} src={`/games/${game.pathImg}`} alt={`Image de présentation de ${game.name}`}/>
                                    </div>
                                    <div className={"carousel-txtInfosEpisode"}>
                                        <div className={'carousel-containerTitleEpisode'}>
                                            <p>{game.name}</p>
                                        </div>
                                        <div className={"carousel-containerNumberYoutuber"}>
                                            <p>{episode.episode}</p>
                                            <p>{episode.youtuber}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }
            </Carousel>
            {
                (openModal && selectedEpisode !== null) && <ModalEpisode episode={selectedEpisode} closeTheModal={closeModal} />
            }
        </>

    );
};

export default StreamCarouselOneGame;