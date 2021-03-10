import { apiEndpoint } from "../core/url";
import http from "../core/base.api";
import { getAuthHeader } from "../helpers/authorization";

class UserAPI {
  verifySession = async () => {
    const [, header] = await getAuthHeader().toArray();

    return await http
      .get(`${apiEndpoint}/security/verify-session-web`, null, header)
      .then((res) => res.data);
  };

}

export default new UserAPI();
