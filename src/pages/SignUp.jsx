import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { setUser } from "../utils/auth";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 characters").required("Required"),
  });

  const onSubmit = (values) => {
    setUser(values); // Save user to localStorage
    navigate("/"); // Redirect to Home
  };

  return (
    <div className="login-container flex items-center justify-center bg-white">
      <div className="login-one bg-white p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Get Started Now</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <Field
              name="name"
              className="mt-1 block w-full border rounded-md p-2"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />

            <label
              className="block text-sm font-medium text-gray-700 mt-4"
              htmlFor="email"
            >
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="mt-1 block w-full border rounded-md p-2"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />

            <label
              className="block text-sm font-medium text-gray-700 mt-4"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              name="password"
              type="password"
              className="mt-1 block w-full border rounded-md p-2"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />

            <button
              type="submit"
              className="mt-6 w-full bg-[#9A96BF] text-white p-2 rounded-md hover:bg-[#9A96BF] transition"
            >
              Sign Up
            </button>
            <div className="flex m-3 justify-center">
              <button className=" btn-1 mx-2 bg-white text-black p-2 rounded-2xl border-1 hover:bg-gray-800 hover:text-amber-50 transition">
                <i className="bx bxs-envelope" /> Sign in with Google
              </button>
              <button className="btn-1 mx-2 bg-black text-white p-2 rounded-2xl hover:bg-white hover:text-black transition border-1">
                <i className="bx bxl-apple" /> Sign in with Apple
              </button>
            </div>

            <p className="sign-opt mt-4 text-center">
              Have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Sign in
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
      <div className="signup-2"></div>
    </div>
  );
};

export default SignUp;
