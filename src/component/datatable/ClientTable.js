import React from "react";
import Sidebar from "../rightbar/Sidebar";
import Header from "../topbar/Header";

function ClientTable() {
  return (
    <>
    <Header/>
    <Sidebar/>
      <div className="col-12">
        <div className="card recent-sales overflow-auto">
          <div className="filter">
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Today
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Month
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Year
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              Client Sales <span>| Today</span>
            </h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">Customer</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Date</th>
                  <th scope="col">Franchise</th>
                  <th scope="col">Postal</th>
                  <th scope="col">Status</th>
                  <th scope="col">User</th>
                  <th scope="col">Type</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brandon Jacob</td>
                  <td>Brandon@gmail.com</td>
                  <td>09876567890</td>
                  <td>1999</td>
                  <td>1111</td>
                  <td>00033</td>
                  <td>
                    <span className="badge bg-success">Approved</span>
                  </td>
                  <td>xxxx</td>
                  <td>pro</td>
                  <td>delete</td>
                </tr>
                <tr>
                  <td>Brandon Jacob</td>
                  <td>Brandon@gmail.com</td>
                  <td>09876567890</td>
                  <td>1999</td>
                  <td>1111</td>
                  <td>00033</td>
                  <td>
                    <span className="badge bg-warning">Pending</span>
                  </td>
                  <td>xxxx</td>
                  <td>pro</td>
                  <td>
                  <button
                          type="button"
                          className="download"
                        >
                          <span aria-hidden="true">
                            <i className="fa-solid fa-file-arrow-down"></i>
                          </span>
                        </button>&nbsp;&nbsp;
                        <button
                          type="button"
                          className="edit"
                        >
                          <span aria-hidden="true">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                        </button>&nbsp;&nbsp;
                  </td>
                </tr>
                <tr>
                  <td>Brandon Jacob</td>
                  <td>Brandon@gmail.com</td>
                  <td>09876567890</td>
                  <td>1999</td>
                  <td>1111</td>
                  <td>00033</td>
                  <td>
                    <span className="badge bg-danger">Rejected</span>
                  </td>
                  <td>xxxx</td>
                  <td>pro</td>
                  <td>delete</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientTable;
