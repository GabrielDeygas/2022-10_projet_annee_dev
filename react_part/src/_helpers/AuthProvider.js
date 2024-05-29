import {Navigate} from "react-router-dom";
import {accountService} from "../services/account.service";

const AuthProvider = ({children}) => {

    if (!(accountService.isAdmin()) && accountService.isLogged()) {
        return <Navigate to={"/ordering"} />;
    }
    if (!(accountService.isAdmin()) && !(accountService.isLogged())) {
        return <Navigate to={"/auth/login"} />;
    }

    return children
};

export default AuthProvider;