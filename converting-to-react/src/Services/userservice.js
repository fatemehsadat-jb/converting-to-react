import http from './httpservice';
import config from './config.json';

export const registeruser = user => {
   return http.post(`${config.toplearnapi}/api/register`,JSON.stringify(user));
};
export const loginuser = user => {
   return http.post(`${config.toplearnapi}/api/login`,JSON.stringify(user));
}