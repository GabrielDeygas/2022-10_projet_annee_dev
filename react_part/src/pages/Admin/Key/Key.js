import React, {useEffect, useState} from "react";
import {keyService} from "../../../services/key.service";
import error from "../../../_utils/error";
import KeyList from "../../../components/admin/Key/KeyList";
import './key.scss'

const KeyShow = () => {
    const [keyLists, setKeyLists] = useState([]);

    useEffect(() => {
        keyService.getAllKeys()
            .then(res => {
                console.log(res.data["hydra:member"])
                setKeyLists(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])

    return (
        <div className={"keyList"}>
            <div className={"title-keyList"}>
                <h2>Liste des keyLists</h2>
            </div>
            {
                keyLists.map(keyList => (
                    <div className={"container-keyList-list"} key={keyList.id}>
                        <KeyList keyList={keyList}/>
                    </div>
                ))
            }
        </div>
    );
};

export default KeyShow;