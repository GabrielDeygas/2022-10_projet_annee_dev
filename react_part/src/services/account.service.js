import ApiAxios from "./caller.service";
import jwtDecode from "jwt-decode";

let login = (credentials) => {
    return ApiAxios.post('/api/login_check', credentials)
}

let saveToken = (token) => {
    localStorage.setItem('token', token);
}

let logout = () => {
    localStorage.removeItem('token');
}

let isLogged = () => {
    let token = localStorage.getItem('token');
    return !!token
}

let isAdmin = () => {
    if (localStorage.getItem('token')) {
        let deserializedToken = jwtDecode(localStorage.getItem('token'));
        if(deserializedToken.roles[0] === 'ROLE_ADMIN') return true
    }
    return false
}

let getToken = () => {
    return localStorage.getItem('token')
}

export const accountService = {
    login, saveToken, logout, isLogged, isAdmin, getToken
}