import axios from "axios";
import { Host, ApiEndpoints } from "../common/ApiEndpoints";
const config = {
    Headers: {
      "Content-Type": "application/json",
    },
  };

  const Me = async (token) => {
    return await axios.get(
      `${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.me}`,
      { headers: { ...config.headers, ...token } }
    );
  };
  const LoginAuth = async (data) => {
    return await axios.post(
      `${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.login}`,
      data,
      config
    );
  };
export {Me,LoginAuth};