import React,{useEffect} from 'react'
import Sidebar from './rightbar/Sidebar'
import Header from './topbar/Header'
import IndexDash from './dashboard/Index';
import { isAuthentication } from "../page/redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth} = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(isAuthentication());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);
  return (
    <>
    <Header/>
    <Sidebar/>
    <IndexDash/>
    </>
  )
}

export default Index