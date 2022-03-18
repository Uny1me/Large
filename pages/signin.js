import axios from "axios";
import React, { useState } from "react";

export default function Signin() {
  const [form, setForm] = useState({
    username: "",
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
      .post("https://alan-blog-api.herokuapp.com/auth/login", form)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    console.log(form);
  };
  return (
    <form>
      <label htmlFor="">Username</label>
      <input
        type="email"
        value={form.username}
        name="username"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="">Password</label>
      <input
        type="password"
        name="password"
        value={form.password}
        placeholder="Enter Password"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
