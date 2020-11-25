import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const url = "http://localhost:5000";


const SignUp = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const handleChange = (text) => (e) => {
    setformData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      axios
        .post(`${url}/api/user/register`, {
          name,
          email,
          password,
        })
        .then((res) => {
          res.data.user === null ?
            toast.error(res.data.message):
            toast.success(res.data.message);
          
          setformData({
            ...formData,
            name: "",
            email: "",
            password: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else{
      toast.error("Please enter all * fields");
    }
  };
  return (
    <>
    <ToastContainer />
    <div className="col-md-6 login-form-2">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange("name")}
            value={name}
            placeholder="Your Name *"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange("email")}
            value={email}
            placeholder="Your Email *"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            onChange={handleChange("password")}
            value={password}
            placeholder="Your Password *"
          />
        </div>
        <div className="form-group">
          <input type="submit" className="btnSubmit" value="SignUp" />
        </div>
      </form>
    </div>
    </>
  );
};

export default SignUp;
