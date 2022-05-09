import axios from "axios";
import { ApiEndpoints, Host } from "../common/ApiEndpoints";

const config = {
  Headers: {
    "Content-Type": "application/json",
  },
};

// const get_subscribe_list = async (data) => {
//   return await axios.get(
//     `${ApiEndpoints.subscribeEndpoints.route}${ApiEndpoints.subscribeEndpoints.getSubscribe_list}`,
//     data,
//     config
//   );
// };
const get_subscribe_list = async (data) => {
  return await axios.get(
    `${Host.BACKEND}${ApiEndpoints.subscribeEndpoints.route}${ApiEndpoints.subscribeEndpoints.getSubscribe_list}`,
    data,
    config
  );
};

export { get_subscribe_list };
