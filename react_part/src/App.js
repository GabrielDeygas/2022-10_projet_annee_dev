import {BrowserRouter, Route, Routes} from "react-router-dom";
import '../src/style/reset.scss'
import PublicRouter from "./pages/Public/PublicRouter";
import React from "react";
import AdminRouter from "./pages/Admin/AdminRouter";
import AuthRouter from "./pages/Auth/AuthRouter";
import AuthProvider from "./_helpers/AuthProvider";


function App() {
    return (
        <div className={"app"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<PublicRouter />} />
                    <Route path="/admin/*" element={
                        <AuthProvider>
                            <AdminRouter />
                        </AuthProvider>
                    } />
                    <Route path="/auth/*" element={<AuthRouter />} />}
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;