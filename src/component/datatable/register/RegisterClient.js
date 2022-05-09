import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_Register } from "../../../page/redux/actions/registerClient";
import Sidebar from "../../rightbar/Sidebar";
import Header from "../../topbar/Header";

function RegisterClient() {
  const { get_all_register } = useSelector((state) => state.registerClt);
  const { token } = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all_Register(token));
  });
  return (
    <>
      <Header />
      <Sidebar />
      <div className="col-12">
        <div className="card recent-sales overflow-auto">
          <div className="card-body">
            <h5 className="card-title">
              S'inscrire client <span>| Aujourdhui</span>
            </h5>
            <table className="table table-borderless datatable table-responsive">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prénom</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date</th>
                  <th scope="col">E-mail vérifié</th>
                  <th scope="col">Suspendu</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {get_all_register &&
                  get_all_register.length > 0 &&
                  get_all_register.map((userS, userSIndx) => (
                    <tr key={userS._id}>
                      <td>{userSIndx + 1}</td>
                      <td>{userS.firstname}</td>
                      <td>{userS.lastname} </td>
                      <td>{userS.email}</td>
                      <td>{userS.createdAt}</td>
                     
                      <td>{userS.isEmailVerified}</td>
                      <td>{userS.isAccountSuspended}</td>
                      <td>
                        
                        <button type="button" className="edit">
                          <span aria-hidden="true">
                            <i className="fa-solid fa-edit"></i>
                          </span>
                        </button>
                      </td>
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

export default RegisterClient;
