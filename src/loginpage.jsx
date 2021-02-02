import React from "react";

export default class LogIn extends React.Component {
  render() {
    return (
      <div id="myForm" class="container-sm position-absolute top-25 start-0 ">
        <h1 class="text-center ">Login</h1>
        <div class="mb-3  ">
          <label for="signupInputEmail1" class="form-label ">
            {" "}
            Email address
          </label>
          <input
            type="email"
            class="form-control w-50 "
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
          class="form-control w-50"
          maxlength="8"
          aria-describedby="passwordHelpBlock"
          required
        />
        <div id="passwordHelpBlock" class="form-text pb-3">
          Your password must be 8 characters long
        </div>
        <button type="submit" class="btn btn-primary">
          login
        </button>
        <p className="forgot-password text-left pt-3">
          <a href="#">Forgot password?</a>
        </p>
        <form action="https://github-gmgtuc.stackblitz.io">
          <button type="submit" class="btn btn-primary btn-block mx-auto w-25">
            Create new account
          </button>
        </form>
      </div>
    );
  }
}
