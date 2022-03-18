import axios from "axios";
import React, { useState, useEffect } from "react";

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prevval) => ({
      ...prevval,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://alan-blog-api.herokuapp.com/auth/register", form)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <form id="signUpForm">
      <div>
        <label htmlFor="firstName">first name</label>
        <input
          type="text"
          value={form.firstName}
          name="firstName"
          placeholder="Enter first name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          placeholder="Enter first name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Enter first name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">phone</label>
        <input
          type="number"
          name="phone"
          value={form.phone}
          placeholder="Enter first name"
          onChange={handleChange}
        />
      </div>
      <label htmlFor="">Password</label>
      <input
        type="password"
        name="password"
        value={form.password}
        placeholder="Enter Password"
        onChange={handleChange}
      />

      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
