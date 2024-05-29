import React from 'react';
import {Routes, Route} from "react-router-dom";
import ALayout from "./ALayout";
import Dashboard from "./Dashboard";
import {Game, GameAdd, GameEdit, GameDelete} from "./Game";
import {KeyAdd, KeyEdit, Key, KeyDelete} from "./Key";
import {OrderEdit, Order} from "./Order";
import {TrailerAdd, TrailerEdit, Trailer, TrailerDelete} from "./Trailer";
import {TypeAdd, TypeEdit, Type, TypeDelete} from "./Type";
import {PlatformAdd, PlatformEdit, Platform, PlatformDelete} from "./Platform";
import {UserAdd, UserEdit, User, UserDesactivation} from "./User";
import {VideoYtAdd, VideoYtEdit, VideoYt, VideoYtDelete} from "./VideoYt";
import Error from "../../_utils/error";


const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />

                <Route path="game" >
                    <Route path="index" element={<Game />} />
                    <Route path="edit/:gid" element={<GameEdit />} />
                    <Route path="add" element={<GameAdd />} />
                    <Route path="game/:gid" element={<GameDelete />} />
                </Route>

                <Route path="key" >
                    <Route path="index" element={<Key />} />
                    <Route path="edit/:kid" element={<KeyEdit />} />
                    <Route path="add" element={<KeyAdd />} />
                    <Route path="delete/:kid" element={<KeyDelete />} />
                </Route>

                <Route path="order" >
                    <Route path="index" element={<Order />} />
                    <Route path="edit/:oid" element={<OrderEdit />} />
                </Route>

                <Route path="platform" >
                    <Route path="index" element={<Platform />} />
                    <Route path="edit/:pid" element={<PlatformEdit />} />
                    <Route path="add" element={<PlatformAdd />} />
                    <Route path="delete/:pid" element={<PlatformDelete />} />
                </Route>

                <Route path="trailer" >
                    <Route path="index" element={<Trailer />} />
                    <Route path="edit/:trid" element={<TrailerEdit />} />
                    <Route path="add" element={<TrailerAdd />} />
                    <Route path="delete/:trid" element={<TrailerDelete />} />
                </Route>

                <Route path="type" >
                    <Route path="index" element={<Type />} />
                    <Route path="edit/:tyid" element={<TypeEdit />} />
                    <Route path="add" element={<TypeAdd />} />
                    <Route path="delete/:tyid" element={<TypeDelete />} />
                </Route>

                <Route path="user" >
                    <Route path="index" element={<User />} />
                    <Route path="edit/:uid" element={<UserEdit />} />
                    <Route path="add" element={<UserAdd />} />
                    <Route path="delete/:uid" element={<UserDesactivation />} />
                </Route>

                <Route path="videoyt" >
                    <Route path="index" element={<VideoYt />} />
                    <Route path="edit/:vyt" element={<VideoYtEdit />} />
                    <Route path="add" element={<VideoYtAdd />} />
                    <Route path="add" element={<VideoYtDelete />} />
                </Route>

                <Route path="*" element={<Error/>} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;