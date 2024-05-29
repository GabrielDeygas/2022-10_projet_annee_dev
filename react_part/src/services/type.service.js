import ApiAxios from "./caller.service";

let getAllTypes = () => {
    return ApiAxios.get('/api/types')
}

let getType = (tyid) => {
    return ApiAxios.get('/api/types/'+tyid)
}

let addType = (data) => {
    return ApiAxios.post('/api/types', data)
}

let editTypes = (tyid, data) => {
    return ApiAxios.put('/api/types/'+tyid, data)
}

let deleteTypes = (tyid) => {
    return ApiAxios.delete('/api/types/'+tyid)
}

export const typeService = {
    getAllTypes, getType, addType, editTypes, deleteTypes
}