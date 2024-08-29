// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h2>Welcome to Our Website</h2>
      <p className="lead">
        <Link to="/signup" className="btn btn-primary">
          <b>Please Signup to Continue</b>
        </Link>
      </p>
    </div>
  );
};

export default Home;
