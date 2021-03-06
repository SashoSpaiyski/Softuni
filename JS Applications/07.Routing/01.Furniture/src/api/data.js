<<<<<<< HEAD
//  we are making this file as a buffer between
//  the api.js and the current task
//  for example -  get request to be specific
import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


const endpoints = {
    all: '/data/catalog'
    ,byId : '/data/catalog/'
    ,myItems : (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`
    ,create: '/data/catalog'
    ,edit: '/data/catalog/'
    ,delete: '/data/catalog/'
}

export async function getAll(){
    return api.get(endpoints.all);
}

export async function getById(id){
    return api.get(endpoints.byId + id);
}

export async function getMyItems(userId){
    return api.get(endpoints.myItems(userId));
}

export async function createItem(data){
    return api.post(endpoints.create, data);
}

export async function editItem(id, data){
    return api.put(endpoints.edit + id, data);
}

export async function deleteItem(id){
    return api.del(endpoints.delete + id);
=======
//  we are making this file as a buffer between
//  the api.js and the current task
//  for example -  get request to be specific
import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


const endpoints = {
    all: '/data/catalog'
    ,byId : '/data/catalog/'
    ,myItems : (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`
    ,create: '/data/catalog'
    ,edit: '/data/catalog/'
    ,delete: '/data/catalog/'
}

export async function getAll(){
    return api.get(endpoints.all);
}

export async function getById(id){
    return api.get(endpoints.byId + id);
}

export async function getMyItems(userId){
    return api.get(endpoints.myItems(userId));
}

export async function createItem(data){
    return api.post(endpoints.create, data);
}

export async function editItem(id, data){
    return api.put(endpoints.edit + id, data);
}

export async function deleteItem(id){
    return api.del(endpoints.delete + id);
>>>>>>> b784f9252f16cdbfa9606cbc4e8408d538877fdf
}