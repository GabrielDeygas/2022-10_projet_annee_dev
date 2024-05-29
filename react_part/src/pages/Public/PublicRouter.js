import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout, AllGames, DetailGame, ShoppingList, StreamGames, Ordering, Inscription} from "./";
import LegalMentions from "../Footer/LegalMentions";
import CGV from "../Footer/CGV";
import ConfidentialityPolicy from "../Footer/ConfidentialityPolicy";

import Error from "../../_utils/error";


const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route path="/" element={<AllGames />}/>
                <Route path="/stream" element={<StreamGames />}/>
                <Route path="/game/:id" element={<DetailGame />} />
                <Route path="/shopping-list" element={<ShoppingList />} />
                <Route path="/ordering" element={<Ordering />} />
                <Route path="/inscription" element={<Inscription />} />

                <Route path="/mentionslegales" element={<LegalMentions />} />
                <Route path="/cgv" element={<CGV />} />
                <Route path="/confidentialite" element={<ConfidentialityPolicy />} />

                <Route path="/*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;