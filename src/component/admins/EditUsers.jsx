import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/adduser.css";
import { add_User } from "../../page/redux/actions/addUser";
import Sidebar from "../rightbar/Sidebar";
import Header from "../topbar/Header";
function EditUsers() {
  const { add_users } = useSelector((state) => state.addUsers);
  console.log("....", add_users);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "", 
    email: "",
    birthiday: "",
    phone: "",
  });
  const { firstname, lastname, email, birthiday, phone } = formData;
  const handleInputChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  const handleAdd = (evt) => {
    evt.preventDefault();
    console.log("dddd", formData);
  };
  useEffect(() => {
    dispatch(add_User);
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="containerForm">
        <header>Modifier Utilisateur</header>
        <form onSubmit={handleAdd}>
          <div className="form first">
            <div className="details personal">
              <span className="title">Détails personnels</span>
              <div className="row">
                <div className="fields">
                  <div className="input-field col-md-4">
                    <label>Nom :</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      name="firstname"
                      value={firstname}
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </div>
                  <div className="input-field col-md-4">
                    <label>Prenom :</label>
                    <input
                      type="text"
                      placeholder="Enter your ccupation"
                      required
                      name="lastname"
                      value={lastname}
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </div>
                  <div className="input-field col-md-4">
                    <label>Date :</label>
                    <input
                      type="date"
                      placeholder="Enter birth date"
                      required
                      name="birthiday"
                      value={birthiday}
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col-md-4">
                    <label>E-mail :</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      name="email"
                      value={email}
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </div>
                  <div className="input-field col-md-4">
                    <label>Télephone :</label>
                    <input
                      type="number"
                      placeholder="Enter mobile number"
                      required
                      name="phone"
                      value={phone}
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </div>
                </div>
                <div className="row">
                  <button className="nextBtn ml-2">
                    <span className="btnText" type="submit">
                      Modifie
                    </span>
                    <i className="uil uil-navigator" />
                  </button>
                </div>
              </div>
              {/* <div className="input-field">
                  <label>Gender :</label>
                  <input
                    type="radio"
                    name="gender"
                    checked={gender === "male"}
                    value="male"
                    onChange={(evt) => handleInputChange(evt)}
                  />{" "}
                  <input
                    type="radio"
                    name="gender"
                    checked={gender === "female"}
                    value="female"
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </div>
                <div className="input-field">
                  <label>Suspend :</label>
                  <input
                    type="radio"
                    name="suspended"
                    checked={suspended}
                    value="oui"
                    onChange={(evt) => handleInputChange(evt)}
                  />
                  <input
                    type="radio"
                    name="suspended"
                    checked={!suspended}
                    value="non"
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </div> */}
            </div>
            {/* <div className="details ID">
              <span className="title">Identity Details</span>
              <div className="fields">
                <div className="input-field">
                  <label>ID Type</label>
                  <input type="text" placeholder="Enter ID type" required />
                </div>
                <div className="input-field">
                  <label>ID Number</label>
                  <input type="number" placeholder="Enter ID number" required />
                </div>
                <div className="input-field">
                  <label>Issued Authority</label>
                  <input type="text" placeholder="Enter issued authority" required />
                </div>
                <div className="input-field">
                  <label>Issued State</label>
                  <input type="text" placeholder="Enter issued state" required />
                </div>
                <div className="input-field">
                  <label>Issued Date</label>
                  <input type="date" placeholder="Enter your issued date" required />
                </div>
                <div className="input-field">
                  <label>Expiry Date</label>
                  <input type="date" placeholder="Enter expiry date" required />
                </div>
              </div>
              <button className="nextBtn">
                <span className="btnText">Ajouter</span>
                <i className="uil uil-navigator" />
              </button>
            </div>  */}
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUsers;
