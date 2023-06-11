import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { clearInputs } from "../../../slices/LeftBar";

function UsersManage({ CreateUsers, setAlert, siteName }) {
  const [isAdmin, SetIsAdmin] = useState("");
  const [site, SetSite] = useState("");
  let inputs = useSelector((state) => state.toggleLeftBar.inputs);

  const dispatch = useDispatch();

  let usernameRef = useRef();
  let emailRef = useRef();
  let phoneRef = useRef();
  let passwordRef = useRef();
  let firstNameRef = useRef();
  let lastNameRef = useRef();
  let isAdimnRef = useRef();
  let siteRef = useRef();
  if (inputs) {
    usernameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    passwordRef.current.value = "";
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    isAdimnRef.current.value = "";
    siteRef.current.value = "";
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const sendData = () => {
    let userData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      isAdmin: Boolean(isAdimnRef.current.value),
      site: parseInt(siteRef.current.value),
    };
    if (
      userData.username.trim() &&
      emailRegex.test(userData.email) &&
      userData.password.trim() &&
      userData.phone.trim() &&
      userData.first_name.trim() &&
      userData.last_name.trim() &&
      (userData.isAdmin === true || userData.isAdmin === false) &&
      userData.site
    ) {
      CreateUsers(userData);
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="create-user slit-in-horizontal">
      <h3>Gestion d'utilisateurs</h3>

      <form action="">
        <div className="input-container ic2">
          <input
            ref={usernameRef}
            id="identifiant"
            className="input"
            type="text"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <div className="cut"></div>
          <label htmlFor="identifiant" className="placeholder">
            Identifiant*
          </label>
        </div>
        <div className="input-container ic2">
          <input
            ref={emailRef}
            id="email"
            className="input"
            type="email"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <div className="cut"></div>
          <label htmlFor="email" className="placeholder">
            E-mail
          </label>
        </div>
        <div className="input-container ic2">
          <input
            ref={phoneRef}
            id="phone"
            className="input"
            type="text"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <div className="cut"></div>
          <label htmlFor="phone" className="placeholder">
            Télephone
          </label>
        </div>
        <div className="input-container ic2">
          <input
            ref={passwordRef}
            id="password"
            className="input"
            type="password"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <div className="cut"></div>
          <label htmlFor="password" className="placeholder">
            Mot de passe*
          </label>
        </div>
        <div className="input-container ic2">
          <input
            ref={firstNameRef}
            id="firstName"
            className="input"
            type="text"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <div className="cut"></div>
          <label htmlFor="firstName" className="placeholder">
            Nom*
          </label>
        </div>
        <div className="input-container ic2">
          <input
            ref={lastNameRef}
            id="lastName"
            className="input"
            type="text"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <div className="cut"></div>
          <label htmlFor="lastName" className="placeholder">
            Prénom*
          </label>
        </div>
        <div className="input-container ic2">
          <select
            id="admin"
            className="input"
            ref={isAdimnRef}
            value={isAdmin}
            onFocus={() => dispatch(clearInputs(false))}
            onChange={(e) => SetIsAdmin(e.target.value)}
          >
            <option value="true">Oui</option>
            <option value="">Non</option>
          </select>
          <label htmlFor="admin" className="placeholder">
            Admin*
          </label>
        </div>
        <div className="input-container ic2">
          <select
            ref={siteRef}
            id="site"
            className="input"
            onFocus={() => dispatch(clearInputs(false))}
            onChange={(e) => SetSite(e.target.value)}
          >
            <option value="">--</option>
            {siteName?.map((site) => (
              <option key={site.id} value={site.id}>
                {site.name}
              </option>
            ))}
          </select>
          <label htmlFor="site" className="placeholder">
            Sites*
          </label>
        </div>
        <button
          type=""
          className="send-btn"
          onClick={(e) => {
            e.preventDefault();
            sendData();
          }}
        >
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <AiOutlineSend />
            </div>
          </div>
          <span>Send</span>
        </button>
      </form>
    </div>
  );
}

export default UsersManage;
