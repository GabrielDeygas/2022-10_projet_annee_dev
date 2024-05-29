import ApiAxios from "./caller.service";

let getAllPlatforms = () => {
    return ApiAxios.get('/api/platforms')
}

let getPlatform = (pid) => {
    return ApiAxios.get('/api/platforms/'+pid)
}

let getPlatformByURL = (url) => {
    return ApiAxios.get(url)
}

let addPlatform = (data) => {
    return ApiAxios.post('/api/platforms', data)
}

let editPlatform = (pid, data) => {
    return ApiAxios.put('/api/platforms/'+pid, data)
}

let deletePlatform = (pid) => {
    return ApiAxios.delete('/api/platforms/'+pid)
}

export const platformService = {
    getAllPlatforms, getPlatform, addPlatform, editPlatform, deletePlatform, getPlatformByURL
}