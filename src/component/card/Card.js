import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { count_Pag_Contacts } from "../../page/redux/actions/ContactTable";
function Card() {
  //--------------------------------------------------------------------------------
  //--------------------OR:
  // const { count_pag } = useSelector(
  //   (state) => state.contacts
  // );
  // const { token } = useSelector((state) => state.auth);
  //--------------------------------------------------------------------------------
  //--------------------OR:
  // const [{count_pag} , {token}] = useSelector((state) => [
  //   state.contacts,
  //   state.auth
  // ]);
  //--------------------------------------------------------------------------------
  //--------------------OR:
  const {
    contactst: { count_pag },
    autht: { token },
  } = useSelector((state) => {
    return { contactst: state.contacts, autht: state.auth };
  });
  //--------------------------------------------------------------------------------
  //--------------------OR:
  // const {contacts : {count_pag} , auth:{token}} = useSelector((state)=> state)
  //--------------------------------------------------------------------------------
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      count_Pag_Contacts(token, {
        filter: { $ne: { firstname: "eeeeeebbjhbujhbjhbjh" } },
      })
    );
  }, [dispatch]);
  return (
    <>
      {/* <div className="col-lg-8"> */}
      <div className="row">
        <div className="col-xxl-4 col-md-4">
          <div className="card info-card sales-card">
            <div className="filter">
              <a className="icon" href="#user" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots"></i>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Users <span>| Today</span>
              </h5>
              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="ps-3">
                  <h6>5</h6>
                  <span className="text-success small pt-1 fw-bold">
                    12%
                  </span>{" "}
                  <span className="text-muted small pt-2 ps-1">increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-4">
          <div className="card info-card revenue-card">
            <div className="filter">
              <a className="icon" href="#contact" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots"></i>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Contacts <span>| This Month</span>
              </h5>
              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-address-card"></i>
                </div>
                <div className="ps-3">
                  <h6>{count_pag}</h6>
                  <span className="text-success small pt-1 fw-bold">8%</span>
                  <span className="text-muted small pt-2 ps-1">increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-4">
          <div className="card info-card customers-card">
            <div className="filter">
              <a className="icon" href="#message" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots"></i>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Messages <span>| This Year</span>
              </h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-comment-dots"></i>
                </div>
                <div className="ps-3">
                  <h6>3</h6>
                  <span className="text-danger small pt-1 fw-bold">12%</span>
                  <span className="text-muted small pt-2 ps-1">decrease</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*           
          <div className="col-xxl-4 col-xl-12 col-md-4">
            <div className="card info-card customers-card">
              <div className="filter">
                <a className="icon" href="#message" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Messages <span>| This Year</span>
                </h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-comment-dots"></i>
                  </div>
                  <div className="ps-3">
                    <h6>1244</h6>
                    <span className="text-danger small pt-1 fw-bold">
                      12%
                    </span>
                    <span className="text-muted small pt-2 ps-1">decrease</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default Card;
