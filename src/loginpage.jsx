import React from "react";

export default class LogIn extends React.Component {
  render() {
    return (
      <div id="myForm">
        <h1>logIn</h1>
        <div class="mb-3">
          <label for="signupInputEmail1" class="form-label">
            {" "}
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="signupInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <label for="inputPassword5" class="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          maxlength="8"
          aria-describedby="passwordHelpBlock"
          required
        />
        <div id="passwordHelpBlock" class="form-text">
          Your password must be 8 characters long
        </div>
        <button type="submit" class="btn btn-primary">
          login
        </button>
        <p className="forgot-password text-right">
          <a href="#">Forgot password?</a>
        </p>
        <form action="https://rlmibwoak.github.stackblitz.io">
          <button type="submit" class="btn btn-primary button">
            Create new account
          </button>
        </form>
      </div>
    );
  }
}
