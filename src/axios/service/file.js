import axios from "axios";
import { Host, ApiEndpoints } from "../common/ApiEndpoints";

const Create = async (data, con) => {
  return await axios.post(
    `${Host.BACKEND}${ApiEndpoints.FileEndpoints.route}${ApiEndpoints.FileEndpoints.createSingleImage}`,
    data,
    { headers: { ...con } }
  );
};

export { Create };
