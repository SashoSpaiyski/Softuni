import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getLatestGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function getAllGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc');
}

export async function createGame(game) {
    return api.post('/data/games', game);
}

export async function getGameById(id) {
    return api.get('/data/games/' + id);
}

export async function deleteGame(id) {
    return api.del('/data/games/' + id);
}

export async function editGame(id, game){
    return api.put('/data/games/'+id, game);
}

export async function getComments(gameId){
    return api.get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}

export async function addComment(gameId, comment){
    return api.post('/data/comments', {gameId, comment});
}