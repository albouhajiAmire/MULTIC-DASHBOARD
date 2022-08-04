import React, { useEffect } from "react";
import "../../../assets/css/pagination.css";
import {
  delete_Subscribe,
  get_all_Subscribe,
} from "../../../page/redux/actions/subscribe";
import Sidebar from "../../rightbar/Sidebar";
import Header from "../../topbar/Header";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
function Subscribe() {
  toast.configure();
  // const { all_contacts } = useSelector((state) => state.contact);
  // const { all_subscribe : nm = {ok : "ok"} } = useSelector((state) => state.users);
  // or :
  // const {subscribe: { all_subscribe } } = useSelector((state) => state);
  // console.log(all_subscribe);
  // or
  // const  subscribe  = useSelector((state) => state.users.all_subscribe);
  // or : didiss2017
  // const { users : {all_subscribe} } = useSelector((state) => state);
  // const { all_subscribe } = users;
  const {all_subscribe}  = useSelector((state) => state.subscribe);
  const { token } = useSelector((state) => state.auth);
  console.log("qhqhqjqhqqq",all_subscribe);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all_Subscribe(token));
  }, []);
  const handleDelete = (id) => {
    dispatch(delete_Subscribe(id,token));
    toast.success("suprimer");
  };
  return (
    <>
      <Header />
      <Sidebar />
      <div className="pagetitle">
        <h1>Profil</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">page d'accuile</a>
            </li>
            <li className="breadcrumb-item">utilisateurs</li>
            <li className="breadcrumb-item active">abonnement client</li>
          </ol>
        </nav>
      </div>
      <div className="col-12">
        <div className="card recent-sales overflow-auto">
          <div className="card-body">
            <div className="row">
              <h5 className="card-title">
                S'abonnement client <span>| Aujourdhui</span>
              </h5>
            </div>
            <div className="row mb-3"></div>
            <table className="table table-borderless datatable table-responsive">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Email</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {all_subscribe &&
                  all_subscribe.length > 0 &&
                  all_subscribe.map((subscribe, userSIndx) => (
                    <tr key={subscribe.id}>
                      <td>{userSIndx + 1}</td>
                      <td
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={`email : ${subscribe.email}`}
                      >
                        {subscribe.email}
                      </td>
                      <td>
                        <button
                          type="button"
                          className="delete"
                          onClick={() => handleDelete(subscribe._id)}
                        >
                          <span aria-hidden="true">
                            <i className="fa-solid fa-trash-can"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item ">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
