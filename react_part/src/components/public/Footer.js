import React from 'react';
import {Link} from "react-router-dom";

import '../../style/footer.scss';

const Footer = () => {
    return (
        <div className={"footer-container"}>
            <div className={"footer-ulContainer"}>
                <ul className={"footer-infos"}>
                    <h4>Informations légales</h4>
                    <li><Link to={"/mentionslegales"}>Mentions Légales</Link></li>
                    <li><Link to={"/cgv"}>CGV</Link></li>
                    <li><Link to={"/confidentialite"}>Politique de confidentialité</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;