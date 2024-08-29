// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
      <div>
        

        <footer className="bg-dark text-white text-center py-4">
          <div className="container">
            <div className="d-flex justify-content-center mb-3">
              <a href="https://github.com/student-Varun" className="text-white mx-2">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/varun-kumar-trikha-148841277" className="text-white mx-2">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/p/C1lY4GcRkIQELlGXZP35TGET-ArpFhuKB9UNi80/?igsh=b3Vzcmo4azRkNm1j" className="text-white mx-2">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
            <p>Connect with me on <a href="https://github.com/student-Varun" className="text-white">GitHub</a>, <a href="https://www.linkedin.com/in/varun-kumar-trikha-148841277" className="text-white">LinkedIn</a>, and <a href="https://www.instagram.com/p/C1lY4GcRkIQELlGXZP35TGET-ArpFhuKB9UNi80/?igsh=b3Vzcmo4azRkNm1j" className="text-white">Instagram</a>.</p>
            <p>&copy; 2024 Varun Trikha. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
