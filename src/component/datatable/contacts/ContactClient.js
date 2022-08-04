import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  count_Nav_Contacts,
  count_Pag_Contacts,
  delete_Contacts,
  get_all_Contacts,
} from "../../../page/redux/actions/ContactTable";
import Sidebar from "../../rightbar/Sidebar";
import Header from "../../topbar/Header";

function ContactClient() {
  //hadi aslia :
  // const { all_contacts } = useSelector((state) => { return state.contacts});
  const { all_contacts, count_pag } = useSelector((state) => state.contacts);
  const { token } = useSelector((state) => state.auth);
  // ila kan ktr mn variable kndiro a9was l state:
  //hadi ankhrj mn all contacts l id  bohdo hada gha exmple:
  // const {_id} = useSelector(({contacts}) => contacts.all_contacts);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all_Contacts(token, { limit: 5 }));
    //---------------------------------------------------
    // dispatch(count_Nav_Contacts(token , {filter : {view : false} , skip : 0 ,}));
    // or :
    //dispatch(count_Nav_Contacts(token ,JSON.stringify({filter : {view : false} , skip : 0 ,}) ));
    // or :
    // dispatch(count_Nav_Contacts(token ,'{"filter" : {"view" : false} , "skip" : 0}'));
    dispatch(
      count_Pag_Contacts(token, {
        filter: { $ne: { firstname: "eeekjhfdeeebbjhbujhbjhbjh" } },
      })
    );
    //-----------------------------------------------------
  }, []);

  const handleDelete = (id) => {
    dispatch(delete_Contacts(id,token));
  };
  // console.log("naaaav", count_pag);
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
            <li className="breadcrumb-item active">contact client</li>
          </ol>
        </nav>
      </div>
      <div className="col-12">
        <div className="card recent-sales overflow-auto">
          <div className="card-body">
            <h5 className="card-title">
              Contact client <span>| Aujourdhui</span>
            </h5>
            <table className="table table-borderless datatable table-respensive">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prénom</th>
                  <th scope="col">Email</th>
                  <th scope="col">Télephone</th>
                  <th scope="col">Sujet</th>
                  <th scope="col">Message</th>
                  {/* <th scope="col">Status</th> */}
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {all_contacts &&
                  all_contacts.length > 0 &&
                  all_contacts.map((contact, userSIndx) => (
                    <tr key={contact._id}>
                      <td>{userSIndx + 1}</td>
                      <td>{contact.lastname}</td>
                      <td>{contact.firstname} </td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                      <td>{contact.subject}</td>
                      <td>{contact.comment}</td>
                      {/* <td>
                        <span className="badge bg-success">vu</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="badge bg-warning">no</span>
                      </td> */}
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <button type="button" className="edit">
                          <span aria-hidden="true">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                        </button>
                        &nbsp;&nbsp;
                        <button
                          type="button"
                          className="delete"
                          onClick={() => handleDelete(contact._id)}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactClient;
