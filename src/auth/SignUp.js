import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Auth,isAuthentication } from "../page/redux/actions/auth";
import "./login.css";
function SignUp() {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const handleLoginData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(Auth(formData));
  };
  useEffect(() => {
    dispatch(isAuthentication());
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  
  //START BTN Show && HIDE :
  const [eye, SetEye] = useState(false);
  const toggleBtn = () => {
    SetEye((prevState) => !prevState);
  };
  //END BTN Show && HIDE :
  return (
    <>
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <label htmlFor="chk" aria-hidden="true" className="labelLogin">
          Se connecter
        </label>
        <input
          className="inputLogin"
          placeholder="e-mail"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            handleLoginData(e);
          }}
        />
        <div>
        <input
          className="inputLogin"
          placeholder="mot de passe"
          name="password"
          value={password}
          onChange={(e) => {
            handleLoginData(e);
          }}
          type={eye ? "text" : "password"}
        />
        <button type="button" className="btnEye" onClick={toggleBtn}>
          {eye ? (
            <i className="fa-solid fa-eye"></i>
          ) : (
            <i className="fa-solid fa-eye-slash"></i>
          )}
        </button>
        </div>
        <button className="buttonLogin">Connexion</button>
      </form>
    </>
  );
}

export default SignUp;
