import ApiAxios from "./caller.service";

let getAllGames = () => {
    return ApiAxios.get('/api/games')
}

let getGameByURL = (url) => {
    return ApiAxios.get(url)
}

let getGame = (gid) => {
    return ApiAxios.get('/api/games/'+gid)
}

let addGame = (data) => {
    return ApiAxios.post('/api/games', data)
}

let editGame = (gid, data) => {
    return ApiAxios.put('/api/games/'+gid, data)
}

let deleteGame = (gid) => {
    return ApiAxios.delete('/api/games/'+gid)
}

export const gameService = {
    getAllGames, getGame, addGame, editGame, deleteGame, getGameByURL
}