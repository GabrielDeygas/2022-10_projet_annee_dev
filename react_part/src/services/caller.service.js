import Axios from "axios";
import {accountService} from "./account.service";

const ApiAxios = Axios.create({
    baseURL: "http://watchandplay.lndo.site"
})

/**
 * Intercepteur pour le TOKEN
 */
ApiAxios.interceptors.request.use(request => {

    if(accountService.isLogged()){
        request.headers.Authorization = "Bearer " +accountService.getToken()
    }

    return request
})

export default ApiAxios