import React from "react";
import Card from "../card/Card";
import AllTable from "../datatable/allTable/AllTable";
import Footer from "../footer/Footer";
import Title from "../titleDashboard/Title";

function Index() {
  return (
    <>
      <Title />
      <div className="row">
        <Card />
        <AllTable/>
      </div>
      <Footer />
    </>
  );
}

export default Index;
