import React, { useState } from "react";
import "./signup.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
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
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),
  });

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.errorCode;
        const errorMessage = error.errorMessage;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="container">
      <div className="">
        <div className="">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
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
              />
              {formik.touched.email && formik.errors.email ? (
                <small className="errors">{formik.errors.email}</small>
              ) : null}
            </div>

            <div className="form-group mb-3">
              <label
                for="inputPassword5"
                htmlFor="password"
                className="form-label"
              >
                Password
              </label>
              <input
                id="inputPassword5"
                name="password"
                className="form-control"
                placeholder="Enter password"
                aria-labelledby="passwordHelpBlock"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <small className="errors">{formik.errors.password}</small>
              ) : null}
            </div>
            <br />

            <button type="submit" className="mb-3" onClick={onLogin}>
              Sign up
            </button>
            <br />
            <p className="text-center">
              No account yet?{""}
              <NavLink to="/signup">Sign Up</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
