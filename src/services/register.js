import { parse } from 'querystring';
import request from '../utils/request';

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export async function accountRegister(params) {
  const data = { ...params };
  return request('https://localhost:44312/api/Account/register', {
    method: 'POST',
    data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error, 'error');
    });
}
