import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux"
import * as yup from "yup";
import { signupAction } from "../Store/Actions/userActions";

export default function Register() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      name: "Nikhil Kathar",
      email: "nikhilkathar99@gmail.com",
      password: "885599",
      cpassword: "885599",
    },
    validationSchema: yup.object({
      name: yup.string().required("name can not be empty"),
      email: yup
        .string()
        .email("this is not valid email address")
        .required("email can not be empty"),

      password: yup
        .string()
        .min(6, "password must be atleast 6 character")
        .required("password can not be empty"),
      cpassword: yup
        .string()
        .required("confirm password can not be empty")
        .oneOf(
          [yup.ref("password"), null],
          "password and confirm password don not match"
        ),
    }),

    onSubmit: async (values,actions) => {
      dispatch(signupAction(values))
      alert("Signin Sucessfuly")
    },
  });

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header">Signup</div>
              <div class="card-body">
                <form onSubmit={formik.handleSubmit}>

                  <div>
                    <label for="name" class="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      placeholder="Enter your name"
                      className={
                        formik.errors.name 
                        ? "form-control is-invalid"
                        : "form-control"
                      }
                    />
                     <div className="valid-feedback"></div>
                    <div class="invalid-feedback">{formik.errors.name}</div>
                  </div>


                  <div class="mt-2">
                    <label for="email" class="form-label">
                      First Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      value={formik.values.email}
                      onChange={formik.handleChange}
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
                      type="text"
                      class="form-control"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a password.
                    </div>
                  </div>

                  <div class="mt-2">
                    <label for="cpassword" class="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      value={formik.values.cpassword}
                      onChange={formik.handleChange}
                      id="cpassword"
                      placeholder="Confirm Your Password"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please Recheck Your Password.
                    </div>
                  </div>


                  <button type="submit" class="btn btn-primary w-100 mt-3">
                    Signup
                  </button>

                  <p class="text-center mt-3">
                    Already Have Account? <Link to={"/login"}>Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
