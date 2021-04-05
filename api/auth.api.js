import { apiEndpoint } from "../core/url";
import http from "../core/base.api";

class AuthAPI {
  login = async (values) => {
    return await http
      .post(`${apiEndpoint}/auth/login`, values)
      .then((res) => res.data);
  };

  register = async (values) => {
    return await http
      .post(`${apiEndpoint}/auth/register`, values)
      .then((res) => res.data);
  };

}

export default new AuthAPI();
