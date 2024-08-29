import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', { name, lastName, email, password });
    
    axios.post('http://localhost:3001/signup', { name, lastName, email, password })
      .then(response => {
        console.log('Signup successful!', response.data);
        navigate('/signin')
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  }

  return (
    <>
      <section className="bg-light py-2 py-md-4 py-xl-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4 col-xxl-3">
              <div className="mb-4">
                <div className="text-center mb-3">
                  <a href="#!">
                  </a>
                </div>
                <h5 className="text-center mb-3">Registration</h5>
                <div className="text-center">
                  <a href="#!" className="btn bsb-btn-lg btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    <span className="ms-2 fs-6">Sign in with Google</span>
                  </a>
                </div>
              </div>
              <div className="card border border-light-subtle rounded-4">
                <div className="card-body p-3 p-md-3 p-xl-4">
                  <form onSubmit={handleSubmit} action="#!">
                    <p className="text-center mb-3">Or sign up using email</p>
                    <div className="row gy-2 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-2">
                          <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" name="name" id="name" placeholder="First Name" required />
                          <label htmlFor="name" className="form-label">First Name</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-2">
                          <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" required />
                          <label htmlFor="lastName" className="form-label">Last Name</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-2">
                          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required />
                          <label htmlFor="email" className="form-label">Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-2">
                          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name="password" id="password" placeholder="Password" required />
                          <label htmlFor="password" className="form-label">Password</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                          <label className="form-check-label text-secondary" htmlFor="iAgree">
                            I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn btn-primary btn-md" type="submit">Sign up</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="d-flex gap-2 gap-md-3 flex-column flex-md-row justify-content-md-center mt-3">
                <p className="m-0 text-secondary text-center">Already have an account? <Link to="/signin" className="link-primary text-decoration-none">Sign in</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
