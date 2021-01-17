import { stringify } from 'querystring';
import { history } from 'umi';
import { accountLogin, getPageQuery } from '../services/login';
import { accountRegister } from '../services/register';

const Model = {
  namespace: 'account', // 命名空间
  state: {}, // store 数据

  effects: { // 副作用 *的是异步方法
    * login({ payload }, { call, put }) {
      const response = yield call(accountLogin, payload);
      if (response.status === 'Success') {
        yield put({
          type: 'changeLoginStatus',
          payload: response,
        });
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();

        let { redirect } = params;

        if (redirect) {
          const redirectUrlParams = new URL(redirect);

          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);

            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = '/';
            return;
          }
        }
        redirect = redirect === 'login' ? '/' : redirect;
        history.replace(redirect || '/');
      }
    },
    * register({ payload }, { call, put }) {
      const response = yield call(accountRegister, payload);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
    logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      localStorage.removeItem('isAuth');
      localStorage.removeItem('roles');
      // 不是login界面的话跳转到login界面
      if (window.location.pathname !== '/login') {
        history.replace({
          pathname: '/login',
          search: stringify({
            redirect: window.location.href,
          }),
        });
      }
    },
  },

  reducers: { // effect获取数据处理方法
    changeLoginStatus(state, { payload }) {
      localStorage.setItem('username', payload.data.userName);
      localStorage.setItem('userId', payload.data.userId);
      localStorage.setItem('token', payload.data.token);
      localStorage.setItem('isAuth', true);
      localStorage.setItem('roles', '["ROLE_ADMIN"]');
      return { ...state };
    },
    registerHandle(state, { payload }) {
      console.log(payload);
      return { ...state, status: payload.succeeded, message: payload.message };
    },
  },
};
export default Model;
