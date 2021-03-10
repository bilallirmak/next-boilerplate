import { apiEndpoint } from "../core/url";
import http from "../core/base.api";
import { getAuthHeader } from "../helpers/authorization";

class AuthAPI {
  login = async (values) => {
    return await http
      .post(`${apiEndpoint}/security/login`, values)
      .then((res) => res.data);
  };
  loginWithPassCode = async (pass_code) => {
    return await http
      .post(`${apiEndpoint}/security/login-with-passcode`, { pass_code })
      .then((res) => res.data);
  };

  register = async (values) => {
    return await http
      .post(`${apiEndpoint}/security/register`, values)
      .then((res) => res.data);
  };

  postResetPassword = async (values) => {
    return await http
      .post(`${apiEndpoint}/security/reset-password`, values)
      .then((res) => res.data);
  };
  getWaitRes = async (code) => {
    return await http
      .get(`${apiEndpoint}/security/get-wait-res`, { code })
      .then((res) => res.data);
  };
  confirmResetPassword = async (values) => {
    return await http
      .post(`${apiEndpoint}/security/confirm-reset-password`, values)
      .then((res) => res.data);
  };
  confirmRegister = async (code) => {
    return await http
      .get(`${apiEndpoint}/security/confirm-register`, { code })
      .then((res) => res.data);
  };

  resendRegisterMail = async () => {
    const [, header] = await getAuthHeader().toArray();

    return await http
      .post(`${apiEndpoint}/security/resend-register-email`, null, header)
      .then((res) => res.data);
  };
}

export default new AuthAPI();
