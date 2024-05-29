import React from 'react';
import {useNavigate} from "react-router-dom";

const PlatformList = ({platform}) => {

    let navigate = useNavigate();

    const handleClick = (platformId) => {
        navigate("../edit/"+platformId);
    }

    return (
        <>
            <div className={"platform-id"}>{platform.id}</div>
            <div className={"platform-email"}>{platform.name}</div>
            <button onClick={() => handleClick(platform.id)} >Edit</button>
        </>
    );
};

export default PlatformList;