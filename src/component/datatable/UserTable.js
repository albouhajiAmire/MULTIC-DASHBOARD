import React from "react";
import Sidebar from "../rightbar/Sidebar";
import Header from "../topbar/Header";

function UserTable() {
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
              Users Sales <span>| Today</span>
            </h5>

            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th scope="col">Customer</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Active</th>
                  <th scope="col">suspended</th>
                  <th scope="col">D.start</th>
                  <th scope="col">D.End</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">ready</th>
                  <th scope="col">Type</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brandon Jacob</td>
                  <td>Brandon@gmail.com</td>
                  <td>09876567890</td>
                  <td> <span className="badge bg-success">Active</span></td>
                  <td>
                    <span className="badge bg-warning">No</span>
                  </td>
                  <td>11/11/20</td>
                  <td>11/10/23</td>
                  <td>10</td>
                  <td>15</td>
                  <td>Admin</td>
                  <td>delete</td>
                </tr>
                <tr>
                  <td>Brandon Jacob</td>
                  <td>Brandon@gmail.com</td>
                  <td>09876567890</td>
                  <td> <span className="badge bg-warning">No</span></td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>11/11/20</td>
                  <td>11/10/23</td>
                  <td>10</td>
                  <td>15</td>
                  <td>Admin</td>
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

export default UserTable;
