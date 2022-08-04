// import axios from "axios";
// import * as types from "./actionType";
// import {GET_USERS} from './actionType'
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNmIyNDViZDhlYWQ5MzM0NmM5MjZmOSIsImZpcnN0bmFtZSI6ImthcmltIiwibGFzdG5hbWUiOiJtYW5zb3VyIiwiZW1haWwiOiJhbWluZWJoajA1QGdtYWlsLmNvbSIsImltYWdlIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCRyQlRjeVFkbmdGRlNEUVVsb244NU8uamRjdDJ1SGxVd1FvMkozR1ZkaVUxeVgzVGtRWGxpbSIsInJ1bGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMi0wNC0yOFQyMzoyOToyNS44NzJaIiwidXBkYXRlZEF0IjoiMjAyMi0wNC0yOFQyMzozNDo0Ny4yMjFaIiwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc0FjY291bnRTdXNwZW5kZWQiOmZhbHNlLCJfX3YiOjB9LCJydWxlIjoidXNlciIsImlhdCI6MTY1MTE4ODkxNCwiZXhwIjoxNjUxNzkzNzE0fQ.YDvCALh6ZvdWK1Ri0uXpwPHA_zxTROM3Ouj1ZAfjXuY";

// const getUsers = (users) => ({
//   type: types.GET_USERS,
//   payload: users,
// });
// const deleteUsers = (id) => ({
//   type: types.DELETE_USERS,
//   payload: { id },
// });
// const deleteContact = (id) => ({
//   type: types.DELETE_CONTACT_USERS,
//   payload: { id },
// });
// const deleteUserSubscrib = (id)=> ({
//   type :types.DELETE_SUBSCRIB_USERS,
//   payload:{id}
// })
// -----------------------GET USERS----------------------
// const subUsers = () => {
//   return function (dispatch) {
//     console.log("bbbbbbb");
//     axios
//       .get("http://localhost:3002/v1/api/subscribe/list", {
//         headers: {
//           Authorization: `bearer ${TOKEN}`,
//         },
//       })
//       .then((resp) => {
//         console.log("resp", resp);
//         if (!resp.data.err) {
//           dispatch(getUsers(resp.data.msg));
//         }
//       })
//       .catch((error) => console.log(error));
//   };
// };

// const contactsUsers = () => {
//   console.log("AAAAAA");
//   return function (dispatch) {
//     axios
//       .get("http://localhost:3002/v1/api/contact/list", {
//         headers: {
//           Authorization: `bearer ${TOKEN}`,
//         },
//       })
//       .then((resp) => {
//         console.log("resp", resp);
//         if (!resp.data.err) {
//           dispatch(getUsers(resp.data.msg));
//         }
//       })
//       .catch((error) => console.log(error));
//   };
// };

// const registerUsers = () => {
//   return function (dispatch) {
//     axios
//       .get("http://localhost:3002/v1/api/user/list", {
//         headers: {
//           Authorization: `bearer ${TOKEN}`,
//         },
//       })
//       .then((resp) => {
//         console.log("resp", resp);
//         if (!resp.data.err) {
//           dispatch({
//             type: types.GET_USERS,
//             payload: resp.data.msg,
//           });
//         }
//       })
//       .catch((error) => console.log(error));
//   };
// };

// const postUser = (filter) => {
//   return function (dispatch) {
//     console.log("bbbbbbb");
//     axios
//       .get("http://localhost:3002/v1/api/cv/list", {
//         headers: {
//           Authorization: `bearer ${TOKEN}`,
//         },
//         params: filter,
//       })
//       .then((resp) => {
//         console.log("resp", resp);
//         if (!resp.data.err) {
//           dispatch({
//             type: types.GET_CV_USERS,
//             payload: resp.data.msg,
//           });
//         }
//       })
//       .catch((error) => console.log(error));
//   };
// };
// -----------------------END GET USERS----------------------
// -----------------------START DELETE USERS----------------------
// const deleteUsr = (id) => {
//   return function (dispatch) {
//     axios
//       .delete(`http://localhost:3002/v1/api/subscribe/delete/${id}`, {
//         headers: {
//           Authorization: `bearer ${TOKEN}`,
//         },
//       })
//       .then((resp) => {
//         console.log("resp", resp);
//         if (!resp.data.err) {
//           dispatch(deleteUsers(id));
//         }
//       })
//       .catch((error) => console.log(error));
//   };
// };
// const deleteUsrContact = (id) => {
//   return function (dispatch) {
//     axios
//       .delete(`http://localhost:3002/v1/api/contact/delete/${id}`, {
//         headers: {
//           Authorization: `bearer ${TOKEN}`,
//         },
//       })
//       .then((resp) => {
//         console.log("resp", resp);
//         if (!resp.data.err) {
//           dispatch(deleteContact(id));
//         }
//       })
//       .catch((error) => console.log(error));
//   };
// };
// const deleteUsrSignup = (id) => {
//   return function (dispatch) {
//     axios
//       .delete(`http://localhost:3002/v1/api/user/delete/${id}`, {
//         headers: {
//           Authorization: `bearer ${TOKEN}`,
//         },
//       })
//       .then((resp) => {
//         console.log("resp", resp);
//         if (!resp.data.err) {
//           dispatch(deleteUsers(id));
//         }
//       })
//       .catch((error) => console.log(error));
//   };
// };
// const deleteUsrPost = (id) => {
//   return function (dispatch) {
//     axios
//       .delete(`http://localhost:3002/v1/api/cv/delete/${id}`, {
//         headers: {
//           Authorization: `bearer ${TOKEN}`,
//         },
//       })
//       .then((resp) => {
//         console.log("resp", resp);
//         if (!resp.data.err) {
//           dispatch(deleteUsers(id));
//         }
//       })
//       .catch((error) => console.log(error));
//   };
// };

// -----------------------------SUBSCRIBE------------------
// const deleteSubscribUser = (id) => {
//   return function (dispatch) {
//     axios
//       .delete(`http://localhost:3002/v1/api/subscribe/delete/${id}`, {
//         headers: {
//           Authorization: `bearer ${TOKEN}`,
//         },
//       })
//       .then((resp) => {
//         console.log("resp", resp);
//         if (!resp.data.err) {
//           dispatch(deleteUserSubscrib(id));
//         }
//       })
//       .catch((error) => console.log(error));
//   };
// };
// const getSubscribe = () => {
//   return function (dispatch) {
//     axios
//       .get("http://localhost:3002/v1/api/subscribe/list", {
//         headers: {
//           Authorization: `bearer ${TOKEN}`,
//         },
//       })
//       .then((resp) => {
//         console.log("resp", resp);
//         if (!resp.data.err) {
//           dispatch({
//             type: types.GET_SUBSCRIBE_USERS,
//             payload: resp.data.msg,
//           });
//         }
//       })
//       .catch((error) => console.log(error));
//   };
// };
// export {
//   subUsers,
//   contactsUsers,
//   registerUsers,
//   postUser,
//   deleteSubscribUser,
//   getSubscribe
// };
