import axios from "axios";
import { ADD_USER } from "../../constans/addUser";
const TOKEN = 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNmIyNDViZDhlYWQ5MzM0NmM5MjZmOSIsImZpcnN0bmFtZSI6ImthcmltIiwibGFzdG5hbWUiOiJtYW5zb3VyIiwiZW1haWwiOiJhbWluZWJoajA1QGdtYWlsLmNvbSIsImltYWdlIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRyQlRjeVFkbmdGRlNEUVVsb244NU8uamRjdDJ1SGxVd1FvMkozR1ZkaVUxeVgzVGtRWGxpbSIsInJ1bGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMi0wNC0yOFQyMzoyOToyNS44NzJaIiwidXBkYXRlZEF0IjoiMjAyMi0wNC0yOFQyMzozNDo0Ny4yMjFaIiwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc0FjY291bnRTdXNwZW5kZWQiOmZhbHNlLCJfX3YiOjB9LCJydWxlIjoidXNlciIsImlhdCI6MTY1MTE4ODkxNCwiZXhwIjoxNjUxNzkzNzE0fQ.YDvCALh6ZvdWK1Ri0uXpwPHA_zxTROM3Ouj1ZAfjXuY";
const add_User = () => {
    return function (dispatch) {
      axios
        .post("http://localhost:3002/v1/api/user/create", {
          headers: {
            Authorization: `bearer ${TOKEN}`,
          },     
        })
        .then((resp) => {
          console.log("resp  user data", resp);
          if (!resp.data.err){
             console.log("add user data",resp.data.msg);
            dispatch({
              type: ADD_USER,
              payload: resp.data.msg,
            });
          }else{
            console.log("add user",resp.data.msg);
          }
        })
        .catch((error) => console.log("add user error",error));
    };
  };
  export{add_User}