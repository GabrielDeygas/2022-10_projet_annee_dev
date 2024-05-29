import ApiAxios from "./caller.service";

let getAllKeys = () => {
    return ApiAxios.get('/api/keys')
}

let getKey = (kid) => {
    return ApiAxios.get('/api/keys/'+kid)
}

let addKey = (data) => {
    return ApiAxios.post('/api/keys', data)
}

let editKey = (kid, data) => {
    return ApiAxios.put('/api/keys/'+kid, data)
}

let deleteKey = (kid) => {
    return ApiAxios.delete('/api/keys/'+kid)
}

export const keyService = {
    getAllKeys, getKey, addKey, editKey, deleteKey
}