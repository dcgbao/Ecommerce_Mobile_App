import axios from 'axios';

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

    http.interceptors.response.use(
      (response) => response,
      (error) => {
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
}

export const http = new Http();
