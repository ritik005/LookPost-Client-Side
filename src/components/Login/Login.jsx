import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { authenticate } from "../../helper/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "../SignUp/SignUp";
import "./Login.css";

const url = "http://localhost:5000";

const Login = (props) => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const handleChange = (text) => (e) => {
    setformData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      axios
        .post(`${url}/api/user/login`, {
          email,
          password,
        })
        .then((res) => {
          const token = res.data.token;
          if (!token) {
            toast.error(res.data.message);
          } else {
            authenticate(res, () => {
              toast.success("Login successful!");
            });
          }
          setformData({
            ...formData,
            email: "",
            password: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please enter all details");
    }
  };
  return (
    <>
      {props.token ? <Redirect to="/post" /> : null}
      <ToastContainer />
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  onChange={handleChange("email")}
                  placeholder="Your Email *"
                  value={email}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  onChange={handleChange("password")}
                  placeholder="Your Password *"
                  value={password}
                />
              </div>
              <div className="form-group">
                <input type="submit" className="btnSubmit" value="Login" />
              </div>
              <div className="form-group">
                <a href="#" className="ForgetPwd">
                  Forget Password?
                </a>
              </div>
            </form>
          </div>
          <SignUp />
        </div>
      </div>
    </>
  );
};
export default Login;
