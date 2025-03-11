import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Frontend/homepage.js';
import LoginPage from './Frontend/login.js';
import SignupPage from './Frontend/sign_up.js';
import DashboardPage from './Frontend/dashboard_page.js';
import LeavePage from './Frontend/leave.js';
import OtpVerify from './Frontend/OtpVerify.js';
import OrganizationStructure from './Frontend/OrganizationStructure.js';


function App() {
  return (
    <div className="App">

      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login.js" element={<LoginPage />} />
        <Route path="/sign_up.js" element={<SignupPage />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/leave.js" element={<LeavePage/>}/>
        <Route path='/otp-verify' element={<OtpVerify/>}/>
        <Route path='/organization-structure' element={<OrganizationStructure/>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;