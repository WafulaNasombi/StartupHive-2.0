import React, { useState } from "react";
import "./signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Password is required")
        .min(5, "Your password is too short")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="panel panel-primary">
          <div className="panel-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label" for="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="email@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="errors">{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="form-group mb-3">
                <label for="password" htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="errors">{formik.errors.password}</small>
                ) : null}
              </div>
            </form>

            <button type="submit" onClick={onSubmit}>
              Sign up
            </button>

            <p>
              Already have an account?{""}
              <NavLink to="/login">Sign In</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
