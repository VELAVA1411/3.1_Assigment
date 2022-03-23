import React from "react";
import { useFormik } from "formik";

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: () => alert("Successsfuly login"),
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "Field Required";
      else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) errors.password = "Field Required";

      return errors;
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label for="email"> Name: </label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      {formik.errors.email ? (
        <p style={{ color: "red" }}>{formik.errors.email} </p>
      ) : null}
      <br />
      <label>Password: </label>
      <br />
      <input
        type="passowrd"
        name="password"
        id="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? (
        <p style={{ color: "red" }}>{formik.errors.password} </p>
      ) : null}
      <br />
      <button type="submit"> Submit</button>
    </form>
  );
};

export default App;
