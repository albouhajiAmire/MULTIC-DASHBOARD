import axios from "axios";
import {
  COUNT_Nav,
  COUNT_PAG,
  DELETE_CONTACT,
  GET_ALL_CONTACT,
} from "../../constans/contactTable";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNmIyNDViZDhlYWQ5MzM0NmM5MjZmOSIsImZpcnN0bmFtZSI6ImthcmltIiwibGFzdG5hbWUiOiJtYW5zb3VyIiwiZW1haWwiOiJhbWluZWJoajA1QGdtYWlsLmNvbSIsImltYWdlIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRyQlRjeVFkbmdGRlNEUVVsb244NU8uamRjdDJ1SGxVd1FvMkozR1ZkaVUxeVgzVGtRWGxpbSIsInJ1bGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMi0wNC0yOFQyMzoyOToyNS44NzJaIiwidXBkYXRlZEF0IjoiMjAyMi0wNC0yOFQyMzozNDo0Ny4yMjFaIiwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc0FjY291bnRTdXNwZW5kZWQiOmZhbHNlLCJfX3YiOjB9LCJydWxlIjoidXNlciIsImlhdCI6MTY1MTE4ODkxNCwiZXhwIjoxNjUxNzkzNzE0fQ.YDvCALh6ZvdWK1Ri0uXpwPHA_zxTROM3Ouj1ZAfjXuY";

const get_all_Contacts = (token, filter) => {
  return function (dispatch) {
    axios
      .get("http://localhost:3002/v1/api/contact/list", {
        headers: {
          Authorization: `bearer ${token}`,
        },
        params: filter,
      })
      .then((resp) => {
        // console.log("resp", resp);
        if (!resp.data.err) {
          // console.log(resp.data.msg);
          dispatch({
            type: GET_ALL_CONTACT,
            payload: resp.data.msg,
          });
        } else {
          // console.log(resp.data.msg);
        }
      })
      .catch((error) => console.log(error));
  };
};

const delete_Contacts = (id, token) => {
  // console.log(id);
  return function (dispatch) {
    axios
      .delete(`http://localhost:3002/v1/api/contact/delete/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        // console.log("resp", resp);
        if (!resp.data.err) {
          // console.log(resp.data.msg);
          dispatch({
            type: DELETE_CONTACT,
            payload: id,
          });
        } else {
          // console.log(resp.data.msg);
        }
      })
      .catch((error) => console.log(error));
  };
};

const count_Nav_Contacts = (token, filter) => {
  console.log(filter);
  return function (dispatch) {
    axios
      .get(`http://localhost:3002/v1/api/contact/count`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
        params: filter,
      })
      .then((resp) => {
        // console.log("resp", resp);
        if (!resp.data.err) {
          // console.log(resp.data.msg);
          dispatch({
            type: COUNT_Nav,
            payload: resp.data.msg,
          });
        } else {
          console.log("countnav", resp.data.msg);
        }
      })
      .catch((error) => console.log(error));
  };
};
const count_Pag_Contacts = (token, filter) => {
  console.log(filter);
  return function (dispatch) {
    axios
      .get(`http://localhost:3002/v1/api/contact/count`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
        params: filter,
      })
      .then((resp) => {
        console.log("resp", resp);
        if (!resp.data.err) {
          console.log("respoooo", resp.data.msg);
          dispatch({
            type: COUNT_PAG,
            payload: resp.data.msg,
          });
        } else {
          console.log("countpag", resp.data.msg);
        }
      })
      .catch((error) => console.log(error));
  };
};

export {
  get_all_Contacts,
  delete_Contacts,
  count_Pag_Contacts,
  count_Nav_Contacts,
};
