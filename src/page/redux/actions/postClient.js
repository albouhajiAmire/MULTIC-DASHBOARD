import axios from "axios";
import { DELETE_CLIENT_CV__USERS, GET_ALL_POST_CLIENT, SIGNLE_POST_CLIENT } from "../../constans/postClient";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNmIyNDViZDhlYWQ5MzM0NmM5MjZmOSIsImZpcnN0bmFtZSI6ImthcmltIiwibGFzdG5hbWUiOiJtYW5zb3VyIiwiZW1haWwiOiJhbWluZWJoajA1QGdtYWlsLmNvbSIsImltYWdlIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRyQlRjeVFkbmdGRlNEUVVsb244NU8uamRjdDJ1SGxVd1FvMkozR1ZkaVUxeVgzVGtRWGxpbSIsInJ1bGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMi0wNC0yOFQyMzoyOToyNS44NzJaIiwidXBkYXRlZEF0IjoiMjAyMi0wNC0yOFQyMzozNDo0Ny4yMjFaIiwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc0FjY291bnRTdXNwZW5kZWQiOmZhbHNlLCJfX3YiOjB9LCJydWxlIjoidXNlciIsImlhdCI6MTY1MTE4ODkxNCwiZXhwIjoxNjUxNzkzNzE0fQ.YDvCALh6ZvdWK1Ri0uXpwPHA_zxTROM3Ouj1ZAfjXuY";

const get_all_PostClient = (token,filter) => {
    return function (dispatch) {
      axios
        .get("http://localhost:3002/v1/api/cv/list", {
          headers: {
            Authorization: `bearer ${token}`,
          },
          params: filter,
        })
        .then((resp) => {
          if (!resp.data.err) {
            // console.log("get_all_PostClient",resp.data.msg);
            dispatch({
              type: GET_ALL_POST_CLIENT,
              payload: resp.data.msg,
            });
          } else {
       console.log("get_all_PostClient",resp.data.msg);
          }
        })
        .catch((error) => 
        console.log("get_all_PostClientERROR",error)
        );
    };
  };
  const delete_PostClient = ({cvId,token}) => {
    // console.log(id);
    return function (dispatch) {
      axios
        .delete(`http://localhost:3002/v1/api/contact/delete/${cvId}`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        .then((resp) => {
          // console.log("resp", resp);
          if (!resp.data.err) {
            // console.log(resp.data.msg);
            dispatch({
              type: DELETE_CLIENT_CV__USERS,
              payload: cvId,
            });
          } else {
            console.log("delete_PostClient",resp.data.msg);
          }
        })
        .catch((error) => console.log("delete_PostClientERROR",error));
    };
  };


const get_signle_cv = (token,filtrage) => {  
  return function (dispatch) {
    axios
      .get("http://localhost:3002/v1/api/cv/list", {
        headers: {
          Authorization: `bearer ${token}`,
        },
        params : filtrage
      })
      .then((resp) => {
        if (!resp.data.err) {
          dispatch({
            type: SIGNLE_POST_CLIENT,
            payload: resp.data.msg,
          });
        } else {
          // console.log(resp.data.msg);
        }
        console.log("get_signle_cv",resp.data);
      })
      .catch((error) => 
      console.log("get_signle_cvERROR",error)
      );
  };
};
  export {get_all_PostClient,delete_PostClient,get_signle_cv}