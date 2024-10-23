import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, fireDB } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Invalid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: name });

      await setDoc(doc(fireDB, 'users', result.user.uid), {
        name: name,
        email: email,
        uid: result.user.uid,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
        )
      });
      toast.success("Registered successfully")

      setError('');
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Layout>
        <div className="container my-3 py-3">
          <h1 className="text-center">Register</h1>
          <hr />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="form my-3">
                  <label htmlFor="Name">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form my-3">
                  <label htmlFor="Email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form my-3">
                  <label htmlFor="Password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <p>
                    Already has an account?{' '}
                    <Link to="/login" className="text-decoration-underline text-info">
                      Login
                    </Link>
                  </p>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="text-center">
                  <button className="my-2 mx-auto btn btn-dark" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;