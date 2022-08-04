import React from "react";
import Sidebar from "../rightbar/Sidebar";
import Header from "../topbar/Header";
function AddUsers() {
   
  return (
    <>
    <Header/>
    <Sidebar/>
     <div className="containerForm">
        <header>Modifie Utilisateur</header>
        <form action="#">
          <div className="form first">
            <div className="details personal">
              <span className="title">Détails personnels</span>
              <div className="fields">
                <div className="input-field">
                  <label>Nom :</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-field">
                  <label>Prenom :</label>
                  <input type="text" placeholder="Enter your ccupation" required />
                </div>
                <div className="input-field">
                  <label>Date :</label>
                  <input type="date" placeholder="Enter birth date" required />
                </div>
                <div className="input-field">
                  <label>E-mail :</label>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-field">
                  <label>Télephone :</label>
                  <input type="number" placeholder="Enter mobile number" required />
                </div>
                <div className="input-field">
                  <label>Gender :</label>
                  <select required>
                    <option disabled selected>Chose gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Suspend :</label>
                  <select required>
                    <option disabled selected>Chose Suspend</option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUsers;
