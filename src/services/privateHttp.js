import axios from 'axios';
import { navigate } from '../Navigators/AppNavigator/RootNavigation';
import { screenName } from '../utils/screenName';
import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from './storage';

const UNAUTHORIZED = 401;

class Http {
  instance = null;

  urlAPI = "http://10.128.137.251:8080";

  get http() {
    return this.instance ? this.instance : this.initHttp();
  }

  static queryParamsURLEncodedString(params) {
    const str = [];
    for (const p in params) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
    }
    return str.join('&');
  }

  initHttp() {
    const http = axios.create({ baseURL: this.urlAPI });

    http.interceptors.request.use(
      async (config) => {
        config.headers['Authorization'] = `Bearer ${await getAccessToken()}`;
        console.log(config.headers);
        return config;
      }
    );

    http.interceptors.response.use(
      (response) => response,
      async (error) => {
        await this.handleError(error);
        if (error) return Promise.reject(error);
        return Promise.reject();
      }
    );

    this.instance = http;
    return http;
  }

  get(url, data) {
    const query = data ? Http.queryParamsURLEncodedString(data) : '';
    return this.http.get(url + '?' + query, config);
  }

  post(url, data) {
    return this.http.post(url, data);
  }

  put(url, data) {
    return this.http.put(url, data);
  }

  delete(url) {
    return this.http.delete(url);
  }

  async handleError(error) {
    if (error && error.response.status === UNAUTHORIZED) {
      try {
        const refreshToken = await getRefreshToken();
        const response = await axios.get(this.urlAPI + '/auth/refresh', {headers: {
          Authorization: `Bearer ${refreshToken}`
        }})
        setAccessToken(response.data.accessToken)
      } catch (error) {
        navigate(screenName.LOGIN)
      }
    }
  }
}

export const privateHttp = new Http();
