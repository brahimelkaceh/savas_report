import { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import { loginForm } from "../../slices/Login";
import AuthContext from "../../context/AuthContext";

let base_url = "https://pouliprod.savas.ma/api/";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const status = useSelector((state) => state.loginForm.status);
  const dispatch = useDispatch();

  return (
    <main className="login-page">
      <form className="login-form" onSubmit={loginUser}>
        <p className="title">Login </p>
        <p className="message">Login now and get full access to our app. </p>
        <span ref={errRef} name="errMsg">
          {errMsg}
        </span>
        <label>
          <input
            placeholder=""
            type="text"
            className="input"
            required
            name="username"
            id="username"
            ref={userRef}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <span>Username</span>
        </label>

        <label>
          <input
            placeholder=""
            type="password"
            className="input"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span>Password</span>
        </label>

        <button className="submit">Submit</button>
        <p className="signin">
          You don't have an acount ?
          <Link to="/register">
            <span>Signup</span>
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
