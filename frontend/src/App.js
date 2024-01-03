//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Authentication/Home';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import WelcomeHome from './Authentication/components/WelcomeHome';
import Student_taBle from './Authentication/components/Student_taBle';
import Contactus from './Authentication/components/Contactus';
// import Signups from './Authentication/Signups';
function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/Login" element={<Login/>} />
        <Route path="/app/Signup" element={<Signup/>} />
        <Route path="/app/WelcomeHome" element={<WelcomeHome/>} />
        <Route path="/app/Donors_Details" element={<Student_taBle/>} />
        <Route path="/app/ContactUs" element={<Contactus/>} />
      </Routes>
    </Router>
  
    </>
  )
}

export default App;
