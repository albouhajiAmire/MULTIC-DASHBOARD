import React from "react";
import Card from "../card/Card";
import ContactClient from "../datatable/contacts/ContactClient";
import Footer from "../footer/Footer";
import Title from "../titleDashboard/Title";

function Index() {
  return (
    <>
      <Title />
      <div className="row">
        <Card />
        <ContactClient/>
        {/* <SubscribClient/>
        <RegisterClient/>
        <PostulerClient/>
        <ClientTable />
        <UserTable/>
        <Profil/> */}
      </div>
      <Footer />
    </>
  );
}

export default Index;
