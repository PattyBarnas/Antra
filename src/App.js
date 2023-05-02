import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <h1>Sing Up</h1>
        <div className="name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Mobile No." />
        <input type="email" placeholder="Email Address" />
        <div className="password">
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
        </div>
        <div className="terms">
          <div className="check">
            <input type="checkbox" />
            <label className="check-label" for="checkbox">
              I Agree
            </label>
          </div>
          <p>
            By clicking <span>Register</span>, you agree to the{" "}
            <a href="url">Terms and Conditions</a> set out by this site,
            including out Cookie Use.
          </p>
        </div>

        <div>
          <button className="btn1">Register</button>
          <button className="btn2">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default App;
