import React, {useEffect, useState} from 'react';
import error from "../../../_utils/error";
import TypeList from "../../../components/admin/Type/TypeList";
import './type.scss'
import {typeService} from "../../../services/type.service";

const Type = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        typeService.getAllTypes()
            .then(res => {
                console.log(res.data["hydra:member"])
                setTypes(res.data["hydra:member"])
            })
            .catch(err => console.log(error))
    }, [])



    return (
        <div className={"type"}>
            <div className={"title-type"}>
                <h2>Liste des utilisateurs</h2>
            </div>
            {
                types.map(type => (
                    <div className={"container-type-list"} key={type.id}>
                        <TypeList type={type}/>
                    </div>
                ))
            }
        </div>
    );
};

export default Type;