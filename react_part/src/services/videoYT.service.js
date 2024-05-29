import ApiAxios from "./caller.service";

let getAllVideoYT = () => {
    return ApiAxios.get('/api/video_youtubes')
}

let getVideoYT = (vyid) => {
    return ApiAxios.get('/api/video_youtubes/'+vyid)
}

let addVideoYT = (data) => {
    return ApiAxios.post('/api/video_youtubes', data)
}

let editVideoYT = (vyid, data) => {
    return ApiAxios.put('/api/video_youtubes/'+vyid, data)
}

let deleteVideoYT = (vyid) => {
    return ApiAxios.delete('/api/video_youtubes/'+vyid)
}

export const videoytService = {
    getAllVideoYT, getVideoYT, addVideoYT, editVideoYT, deleteVideoYT
}