import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div id="login">
      <form id="login_form" method="post">
        <h1>Login</h1>
        <label>
          <input
            autoComplete="off"
            autoFocus="off"
            type="username"
            name="username"
            placeholder="Username"
          />
        </label>
        <label>
          <input
            autoComplete="off"
            autoFocus="off"
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
