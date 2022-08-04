import React, { useEffect } from "react";
import Sidebar from "../rightbar/Sidebar";
import Header from "../topbar/Header";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_signle_cv } from "../../page/redux/actions/postClient";
import { fileDownload, fileView } from "../../axios/common/function";
function CvUsers() {
  const params = useParams();
  const { cvUserPost } = useSelector((state) => state.postclient);
  // console.log("eeeeeee", cvUserPost); 
  const { token } = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  useEffect(() => {
    // dispatch(get_signle_cv(token, { filter : JSON.stringify({_id : params.id})  }));
    // or :
    dispatch(
      get_signle_cv(token, {
        filter: `{ "_id": "${params.id}"}`,
        expend: "userId",
      })
    );
  }, []);
  //  console.log("cvcccvcvvvvvvv",cvUserPost);
  //-----------------------------------------------
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
            <li className="breadcrumb-item">Utilisateurs</li>
            <li className="breadcrumb-item active">Details</li>
          </ol>
        </nav>
      </div>
      <section className="section profile">
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <img
                  src=""
                  //   src={fileView(user.image._id)}
                  alt="Profile"
                  className="rounded-circle"
                />
                <h2>{/* {user.firstname + " " + user.lastname} */}</h2>
                <h3>Web Designer</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card">
              {cvUserPost && cvUserPost._id && (
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Details
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <h5 className="card-title">Environ :</h5>
                      <p className="small fst-italic">
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </p>

                      <h5 className="card-title">Profile Details</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">Nom :</div>
                        <div className="col-lg-9 col-md-8">
                          {cvUserPost.userId.lastname}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">Prénom :</div>
                        <div className="col-lg-9 col-md-8">
                          {cvUserPost.userId.firstname}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">rôle</div>
                        <div className="col-lg-9 col-md-8">Web Designer</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          Téléphone :
                        </div>
                        <div className="col-lg-9 col-md-8">
                          {cvUserPost.userId.phone}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">E-mail :</div>
                        <div className="col-lg-9 col-md-8">
                          {cvUserPost.userId.email}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">Nom :</div>
                        <div className="col-lg-9 col-md-8">
                          {cvUserPost.birthday}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">C_V : </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CvUsers;
