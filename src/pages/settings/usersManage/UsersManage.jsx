import { AiOutlineSend } from "react-icons/ai";

function UsersManage() {
  return (
    <div className="create-user slit-in-horizontal">
      <h3>Gestion d'utilisateurs</h3>
      <form action="">
        <div className="input-container ic2">
          <input
            id="identifiant"
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="identifiant" className="placeholder">
            Identifiant
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="email" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="email" className="placeholder">
            E-mail
          </label>
        </div>
        <div className="input-container ic2">
          <input id="phone" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="phone" className="placeholder">
            Télephone
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="password"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="password" className="placeholder">
            Mot de passe
          </label>
        </div>
        <div className="input-container ic2">
          <input id="firstName" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="firstName" className="placeholder">
            Nom
          </label>
        </div>
        <div className="input-container ic2">
          <input id="lastName" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="lastName" className="placeholder">
            Prénom
          </label>
        </div>
        <div className="input-container ic2">
          <select id="site" className="input">
            <option value="">--</option>
            <option value="site1">site1</option>
            <option value="site2">site2</option>
            <option value="site3">site3</option>
            <option value="site4">site4</option>
            <option value="site5">site5</option>
          </select>
          <label htmlFor="site" className="placeholder">
            Sites
          </label>
        </div>
        <button type="submit" className="send-btn">
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
