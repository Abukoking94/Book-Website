import React from "react";

function SignUp() {
  return (
    <div className="sign-up-container">
      <div className="signup-one">
        <h1>Get Started Now</h1>
        <form action="">
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" />

          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" />

          <label htmlFor="Password">Password</label>
          <input type="password" name="Password" />

          <button type="submit">Signup</button>

          <p>----------------------------OR----------------------------</p>

          <div className="sign-in-opt">
            <button>Sign in with Google</button>
            <button>Sign in with Apple</button>
          </div>
        </form>
      </div>
          <div className="signup-two">
              
      </div>
    </div>
  );
}

export default SignUp;
