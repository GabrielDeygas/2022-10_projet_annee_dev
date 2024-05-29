import ApiAxios from "./caller.service";

let getAllUsers = () => {
    return ApiAxios.get('/api/users')
}

let getUser = (uid) => {
    return ApiAxios.get('/api/users/'+uid)
}

let getUserByURL = (url) => {
    return ApiAxios.get(url)
}

let addUser = (data) => {
    return ApiAxios.post('/api/users', data)
}

let editUser = (uid, data) => {
    return ApiAxios.put('/api/users/'+uid, data)
}

let deleteUser = (uid) => {
    return ApiAxios.delete('/api/users/'+uid)
}

export const userService = {
    getAllUsers, getUser, getUserByURL, addUser, editUser, deleteUser
}