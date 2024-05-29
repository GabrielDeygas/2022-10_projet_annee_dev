import React from 'react';
import ReactPlayer from "react-player";
import './modalepisode.scss';

const ModalEpisode = ({episode, closeTheModal}) => {
    episode = episode.episode;
    console.log(closeTheModal)

    const ytLink = `https://www.youtube.com/watch?v=${episode.link}`;

   return (
       <div className={"modal-container"}>
           <div className={"video-container"} onClick={closeTheModal}>
               <ReactPlayer url={ytLink} width={1280} height={720} controls={true}/>
           </div>
       </div>
   );
};

export default ModalEpisode;