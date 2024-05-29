import React from 'react';
import {useNavigate} from "react-router-dom";

const TrailerList = ({trailer}) => {
    console.log(trailer)
    let navigate = useNavigate();

    const handleClick = (trid) => {
        navigate("../edit/"+trid);
    }

    return (
        <>
            <div className={"trailer-id"}>{trailer.id}</div>
            <div className={"trailer-email"}>{trailer.pathVideo}</div>
            <button onClick={() => handleClick(trailer.id) } >Edit</button>
        </>
    );
};

export default TrailerList;