import Index from "./component/Index";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import ContactClient from "./component/datatable/contacts/ContactClient";
import PostulerClient from "./component/datatable/PostulerClient";
import UserTable from "./component/datatable/UserTable";
import ClientTable from "./component/datatable/ClientTable";
import Login from "./auth/Login";
import "./assets/css/button.css";
import Subscribe from "./component/datatable/subscribe/Subscribe";
import AdminProfil from "./component/admins/AdminProfil";
import RegisterClient from "./component/datatable/register/RegisterClient";
import PostClient from "./component/datatable/postClient/PostClient";
import CvUsers from "./component/admins/CvUsers";
import AddUsers from "./component/admins/AddUsers";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main id="main" className="main">
          <section className="section dashboard">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profil" element={<AdminProfil />} />
              <Route path="/contactclient" element={<ContactClient />} />
              <Route path="/abonnement" element={<Subscribe />} />
              <Route path="/registerclient" element={<RegisterClient />} />
              <Route path="/postuleclient" element={<PostClient />} />
              <Route path="/superadministrateur" element={<UserTable />} />
              <Route path="/administrateur" element={<ClientTable />} />
              <Route path="/cvProfil/:id" element={<CvUsers />} />
              <Route path="/adduser" element={<AddUsers />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
