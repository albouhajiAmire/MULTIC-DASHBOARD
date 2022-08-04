import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { get_all_Register } from "../../../page/redux/actions/registerClient";
import Sidebar from "../../rightbar/Sidebar";
import Header from "../../topbar/Header";
import Button from "../../../controle/Button";
import moment from "moment"; 
function RegisterClient() {
  // const [query, setQuery] = useState("");
  const { get_all_register } = useSelector((state) => state.registerClt);
  const { token } = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all_Register(token)); 
  },[]);
  return (
    <>
      <Header />
      <Sidebar />
      <div className="pagetitle">
        <h1>Profil</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={'/'}>page d'accuile</Link>
            </li>
            <li className="breadcrumb-item">utilisateurs</li>
            <li className="breadcrumb-item active">utilisateurs client</li>
          </ol>
        </nav>
      </div>
      <div className="col-12">
        <div className="card recent-sales overflow-auto">
          <div className="card-body">
            <div className="row">
              <h5 className=" col-md-6 card-title">
                Postuler client <span>| Aujourdhui</span>
              </h5>
              <div className="col-md-6 ">
                <NavLink to={"/editUser"}>
                  <Button />
                </NavLink>
              </div>
            </div>
            <div className="row">
              <div
                className="input-field mb-4"
                style={{
                  height: "36px",
                }}
              >
                {/* <input
                  type="text"
                  placeholder="Recherche"
                  onChange={(e) => setQuery(e.target.value)}
                /> */}
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{
                    marginLeft: "-29px",
                    cursor: "pointer",
                    position: "sticky",
                  }}
                ></i>
              </div>
            </div>
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
                      <td>{moment(userS.createdAt).format("DD-MM-YYYY")}</td>
                      <td>{userS.isEmailVerified}</td>
                      <td>{userS.isAccountSuspended}</td>
                      <td>
                        <Link to={"/editUser"}>
                          <button type="button" className="edit">
                            <span aria-hidden="true">
                              <i className="fa-solid fa-edit"></i>
                            </span>
                          </button>
                        </Link>
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
