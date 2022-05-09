import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileDownload, fileView } from "../../axios/common/function";
import { deleteUsrPost, postUser } from "../../page/redux/actions/action";
import Sidebar from "../rightbar/Sidebar";
import Header from "../topbar/Header";
function PostulerClient() {
  const { cvUser } = useSelector((state) => state.users);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      postUser({
        expend: "userId",
      })
    );
  }, []);
  // const handleDelete = (id) => {
  //   if (window.confirm("are you sure ")) {
  //     dispatch(deleteUsrPost(id));
  //   }
  // };

  const downloadFile = (fileId) => {
    const a = document.createElement("a");
    a.href = fileDownload(fileId);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const viewFile = (fileId) => {
    const a = document.createElement("a");
    a.href = fileView(fileId);
    a.target = "__blanck";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  console.log(cvUser);
  return (
    <>
      <Header />
      <Sidebar />
      <div className="col-12">
        <div className="card recent-sales overflow-auto">
          <div className="card-body">
            <h5 className="card-title">
              Postuler client <span>| Aujourdhui</span>
            </h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Diplome</th>
                  {/* <th scope="col">nom complete</th> */}
                  <th scope="col">D'emploi</th>
                  <th scope="col">L.Motivation</th>
                  <th scope="col">gender</th>
                  <th scope="col">date.N</th>
                  {/* <th scope="col">Status</th> */}
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cvUser &&
                  cvUser.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td> {user.type} </td>
                      {/* <td>{`${user.userId.firstname} ${user.userId.lastname}`}</td> */}
                      <td>{user.certificate}</td>
                      <td>{user.presentation}</td>
                      <td>{user.gender}</td>
                      <td>{user.birthday}</td>
                      {/* <td>
                        <span className="badge bg-success">Valider</span>
                        <span className="badge bg-warning">En attente</span>
                        <span className="badge bg-danger">Rejetée</span>
                      </td> */}

                      <button
                        type="button"
                        className="delete"
                        // onClick={() => handleDelete(user._id)}
                      >
                        <span aria-hidden="true">
                          <i className="fa-solid fa-trash-can"></i>
                        </span>
                      </button>

                      <button
                        type="button"
                        className="delete"
                        onClick={() => viewFile(user.cvId)}
                      >
                        <span aria-hidden="true">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                      </button>

                      <button
                        type="button"
                        className="delete"
                        onClick={() => downloadFile(user.cvId)}
                      >
                        <span aria-hidden="true">
                          <i className="fa-solid fa-download"></i>
                        </span>
                      </button>
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

export default PostulerClient;
