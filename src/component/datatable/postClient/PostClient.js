import React, { useEffect } from "react";
import Sidebar from "../../rightbar/Sidebar";
import Header from "../../topbar/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_PostClient,
  get_all_PostClient,
} from "../../../page/redux/actions/postClient";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";
function PostClient() {
  toast.configure();
  const { get_all_post_client } = useSelector((state) => state.postclient);
   
  const { token } = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all_PostClient(token, { expend: "userId" })); 
  }, []);
  // -----------------------------------------------------------
  const handleDelete = (cvId) => {
    if (window.confirm("are you sure ")) {
      dispatch(delete_PostClient({ token, cvId }));
    }
  };
  // -----------------------------------------------------------
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
            <li className="breadcrumb-item active">postuler client</li>
          </ol>
        </nav>
      </div>
      <div className="col-12">
        <div className="card recent-sales overflow-auto">
          <div className="card-body">
            <div className="row">
              <h5 className=" col-md-8 card-title">
                Postuler client <span>| Aujourdhui</span>
              </h5>
              <div className="col-md-2 ">
              <div className="input-field mb-4" style={{
               
              }}>
                <input type="text" placeholder="Recherche"/>
                <i className="fa-solid fa-magnifying-glass" style={{
                  marginLeft:'-29px',cursor:"pointer" ,position:"sticky"
                }}></i>
              </div>
              </div>
            </div>
            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Diplome</th>
                  <th scope="col">nom complete</th>
                  <th scope="col">D'emploi</th>
                  <th scope="col">L.Motivation</th>
                  <th scope="col">gender</th>
                  <th scope="col">date.N</th>
                  {/* <th scope="col">Status</th> */}
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {get_all_post_client &&
                  get_all_post_client.map((userCv, index) => (
                    <tr key={userCv._id}>
                      <td>{index + 1}</td>
                      <td> {userCv.type} </td>
                      <td>
                        {/* <NavLink to={`/cvProfil/${userCv.userId._id}`}> */}
                          {/* {`${userCv.userId.firstname} ${userCv.userId.lastname}`}{" "} */}
                        {/* </NavLink>{" "} */}
                      </td>

                      <td>{userCv.certificate}</td>
                      <td>{userCv.presentation}</td>
                      <td>{userCv.gender}</td>
                      <td>{moment(userCv.birthday).format("DD-MM-YYYY")}</td>
                      {/* <td>
                        <span className="badge bg-success">Valider</span>
                        <span className="badge bg-warning">En attente</span>
                        <span className="badge bg-danger">Rejetée</span>
                      </td> */}

                      <button
                        type="button"
                        className="delete"
                        onClick={() => handleDelete(userCv._id)}
                      >
                        <span aria-hidden="true">
                          <i className="fa-solid fa-trash-can"></i>
                        </span>
                      </button>

                      <NavLink to={`/cvProfil/${userCv._id}`} className="delete">
                        <span aria-hidden="true">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                      </NavLink>
 
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostClient;
