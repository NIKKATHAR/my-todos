import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch} from "react-redux"
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../Store/Actions/userActions";

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "nikhilkathar99@gmail.com",
      password: "885599",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("email can not be empty")
        .email("This is not valid email address"),
      password: yup
        .string()
        .required("password can not be empoty")
    }),
    onSubmit: (values) => {
      dispatch(loginAction(values))&& navigate("/")
      console.log("ghjg");
    },
  });

  return (
    <div>
      <div class="container">
        {JSON.stringify(formik.errors)}
        {JSON.stringify(formik.values)}
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header">Login</div>
              <div class="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <label for="email" class="form-label">
                      First Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      class="form-control"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div class="mt-2">
                    <label for="password" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary w-100 mt-3">
                    Login
                  </button>
                  <p class="text-center mt-3">
                    Dont Have Account?
                    <Link to={"/register"}>Create Account</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
