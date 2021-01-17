import { parse } from 'querystring';
import request from '../utils/request';

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export async function accountLogin(params) {
  const { email, password } = params;
  const data = { email, password };
  return request('http://space.e-taman.com/user/api/User/Login', {
    method: 'POST',
    data,
  }).then((response) => {
    console.log(response);
    return response;
  }).catch((error) => {
    console.log(error);
  });
}
