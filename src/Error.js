import React from "react";
import Sidebar from "./component/rightbar/Sidebar";
import Header from "./component/topbar/Header";

function Error() {
  return (
    <>
    <Header/>
    <Sidebar/>
      <div class="container">
        <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
          <h1>404</h1>
          <h2>The page you are looking for doesn't exist.</h2>
          <a class="btn" href="index.html">
            Back to home
          </a>
          <div class="credits">
            Developpers by <a href="https://bootstrapmade.com/">Amine Albouhaji and Karim mansour</a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Error;