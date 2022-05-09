import axios from "axios";
import { DELETE_SUBSCRIBE, GET_ALl_SUBSCRIBE } from "../../constans/subscribe";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNmIyNDViZDhlYWQ5MzM0NmM5MjZmOSIsImZpcnN0bmFtZSI6ImthcmltIiwibGFzdG5hbWUiOiJtYW5zb3VyIiwiZW1haWwiOiJhbWluZWJoajA1QGdtYWlsLmNvbSIsImltYWdlIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRyQlRjeVFkbmdGRlNEUVVsb244NU8uamRjdDJ1SGxVd1FvMkozR1ZkaVUxeVgzVGtRWGxpbSIsInJ1bGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMi0wNC0yOFQyMzoyOToyNS44NzJaIiwidXBkYXRlZEF0IjoiMjAyMi0wNC0yOFQyMzozNDo0Ny4yMjFaIiwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc0FjY291bnRTdXNwZW5kZWQiOmZhbHNlLCJfX3YiOjB9LCJydWxlIjoidXNlciIsImlhdCI6MTY1MTE4ODkxNCwiZXhwIjoxNjUxNzkzNzE0fQ.YDvCALh6ZvdWK1Ri0uXpwPHA_zxTROM3Ouj1ZAfjXuY";

const get_all_Subscribe = () => {
    return function (dispatch) {
      axios
        .get("http://localhost:3002/v1/api/subscribe/list", {
          headers: {
            Authorization: `bearer ${TOKEN}`,
          },
         
        })
        .then((resp) => {
          console.log("resp", resp);
          if (!resp.data.err) {
            // console.log(resp.data.msg);
            dispatch({
              type: GET_ALl_SUBSCRIBE,
              payload: resp.data.msg,
            });
          }else{
            console.log(resp.data.msg);
          }
        })
        .catch((error) => console.log(error));
    };
  };

  const delete_Subscribe = (id) => {
    return function (dispatch) {
      axios
        .delete(`http://localhost:3002/v1/api/subscribe/delete/${id}`, {
          headers: {
            Authorization: `bearer ${TOKEN}`,
          },
         
        })
        .then((resp) => {
          console.log("resp", resp);
          if (!resp.data.err) {
            // console.log(resp.data.msg);
            dispatch({
              type: DELETE_SUBSCRIBE,
              payload: id,
            });
          }else{
            console.log(resp.data.msg);
          }
        })
        .catch((error) => console.log(error));
    };
  };
export {get_all_Subscribe,delete_Subscribe}
