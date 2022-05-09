import axios from "axios";
import { Host, ApiEndpoints } from "../common/ApiEndpoints";
const config = {
  Headers: {
    "Content-Type": "application/json",
  },
};

const Image = async (id, data, con) => {
  return await axios.put(
    `${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.image}/${id}`,
    data,
    { headers: { ...config.headers, ...con } }
  );
};

const EditAccount = async (id, data, con) => {
  return await axios.put(
    `${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.edit}/${id}`,
    data,
    { headers: { ...config.headers, ...con } }
  );
};

const ChangePassword = async (id, data, con) => {
  return await axios.put(
    `${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.resetPassword}/${id}`,
    data,
    { headers: { ...config.headers, ...con } }
  );
};
export { EditAccount, Image,ChangePassword };
