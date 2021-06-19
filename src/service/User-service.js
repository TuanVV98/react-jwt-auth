import http from '../http-commom/Http-commom.js';
import authHeader from './Auth-header.js';

const getBoardAdmin = () => {
    return http.get("/rest-api/test/admin",{ headers: authHeader() });
}

const getBoardUser = () => {
    return http.get("/rest-api/test/user",{ headers: authHeader() });
}

export default {
    getBoardAdmin,
    getBoardUser
}