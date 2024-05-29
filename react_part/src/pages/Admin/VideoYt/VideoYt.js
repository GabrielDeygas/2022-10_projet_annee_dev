import React, {useEffect, useState} from 'react';
import error from "../../../_utils/error";
import VideoYTList from "../../../components/admin/VideoYT/VideoYTList";
import {videoytService} from "../../../services/videoYT.service";
import './videoyt.scss';

const VideoYT = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        videoytService.getAllVideoYT()
            .then(res => {
                console.log(res.data["hydra:member"])
                setVideos(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])



    return (
        <div className={"videoyt-container"}>
            <div className={"title-videoyt"}>
                <h2>Liste des vidéos</h2>
            </div>
            {
                videos.map(video => (
                    <div className={"container-videoyt-list"} key={video.id}>
                        <VideoYTList video={video}/>
                    </div>
                ))
            }
        </div>
    );
};

export default VideoYT;