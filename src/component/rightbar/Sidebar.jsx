import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <NavLink to={"/"} className="nav-link ">
              <i className="fa-solid fa-gauge"></i>
              <span>Tableau de bord</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
            >
              <i className="fa-solid fa-table-cells"></i>
              <span>Utilisateurs</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa-solid fa-chevron-down"></i>
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to={"/"}>
                <i className="fa-solid fa-table-cells"></i>
                  <span>Tableaux généraux</span>
                </NavLink>
              </li>
              {/* <li>
                <NavLink to={'/superadministrateur'}>
                <i className="fa-solid fa-circle-dot"></i>
                  <span>Super administrateur</span>
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink to={'/administrateur'}>
                <i className="fa-solid fa-circle-dot"></i>
                  <span>Administrateur</span>
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink to={"/"}>
                <i className="fa-solid fa-users-line"></i>
                  <span>Client</span>
                </NavLink>
              </li> */}
              <li>
                <NavLink to={"/registerclient"}>
                
                  <i className="fa-solid fa-users"></i>
                  <span>Enregistre</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/postuleclient"}>
                  <i className="fa-solid fa-user-tag"></i>
                  <span>Postule</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contactclient"}>
                  <i className="fa-solid fa-id-card"></i>
                  <span>Contact</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/abonnement"}>
                  <i className="fa-solid fa-circle-dot"></i>
                  <span>Abonnement</span>
                </NavLink>
              </li>
            </ul>
          </li>
          {/* 
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="fa-solid fa-chart-column"></i>
              <span>Charts</span>
              <i className="fa-solid fa-chevron-down"></i>
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="charts-chartjs.html">
                <i className="fa-solid fa-circle-chevron-down"></i>
                  <span>Chart.js</span>
                </a>
              </li>
              <li>
                <a href="charts-apexcharts.html">
                <i className="fa-solid fa-circle-chevron-down"></i>
                  <span>ApexCharts</span>
                </a>
              </li>
              <li>
                <a href="charts-echarts.html">
                <i className="fa-solid fa-circle-chevron-down"></i>
                  <span>ECharts</span>
                </a>
              </li>
            </ul>
          </li> */}

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <NavLink
              to={"/profil"}
              className="nav-link collapsed"
              href="users-profile.html"
            >
              <i className="fa-solid fa-person-circle-plus"></i>
              <span>Profil</span>
            </NavLink>
          </li>

          {/* <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
            <i className="fa-solid fa-circle-question"></i>
              <span>F.A.Q</span>
            </a>
          </li> */}

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="fa-solid fa-id-card-clip"></i>
              <span>Contacts Chat</span>
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link collapsed" href="pages-register.html">
            <i className="fa-solid fa-registered"></i>
              <span>Register</span>
            </a>
          </li> */}

          <li className="nav-item">
            <NavLink to={"/login"} className="nav-link collapsed">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              <span>Se déconnecter</span>
            </NavLink>
          </li>

          {/* <li className="nav-item">
            <NavLink to={""} className="nav-link collapsed" href="pages-error-404.html">
            <i className="fa-solid fa-circle-exclamation"></i>
              <span>Error 404</span>
            </NavLink>
          </li> */}

          {/* <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark"></i>
              <span>Blank</span>
            </a>
          </li> */}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
