import ApiAxios from "./caller.service";

let getAllTrailers = () => {
    return ApiAxios.get('/api/trailers')
}

let getTrailer = (trid) => {
    return ApiAxios.get('/api/trailers/'+trid)
}

let getTrailerByURL = (url) => {
    return ApiAxios.get(url)
}

let addTrailer = (data) => {
    return ApiAxios.post('/api/trailers', data)
}

let editTrailer = (trid, data) => {
    return ApiAxios.put('/api/trailers/'+trid, data)
}

let deleteTrailer = (trid) => {
    return ApiAxios.delete('/api/trailers/'+trid)
}

export const trailerService = {
    getAllTrailers, getTrailer, addTrailer, editTrailer, deleteTrailer, getTrailerByURL
}