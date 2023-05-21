import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
function SitesManage() {
  const [sites, setSites] = useState([]);
  const [newSite, setNewSite] = useState("");

  const handleInputChange = (e) => {
    setNewSite(e.target.value);
  };

  const handelToAddSite = () => {
    if (newSite.trim() !== "") {
      const site = {
        id: Date.now(),
        site: newSite,
        completed: false,
      };

      setSites([...sites, site]);
      setNewSite("");
    }
  };

  const handelToEditSite = (id) => {
    const updateSites = sites.map((site) => {
      if (site.id === id) {
        return { ...site, site: "Updated item" };
      }
      return site;
    });

    setSites(updateSites);
  };

  const handleToggleComplete = (id) => {
    const updateSites = sites.map((site) => {
      if (site.id === id) {
        return { ...site, completed: !site.completed };
      }
      return site;
    });

    setSites(updateSites);
  };

  const handleToDeleteSite = (id) => {
    const updateSites = sites.filter((site) => site.id !== id);
    setSites(updateSites);
  };
  return (
    <div className="create-site slit-in-horizontal">
      <h3>Gestion des sites</h3>
      <div className="input-container ic2">
        <input
          id="siteName"
          className="input"
          type="text"
          placeholder=" "
          value={newSite}
          onChange={handleInputChange}
        />
        <div className="cut"></div>
        <label htmlFor="siteName" className="placeholder">
          Site
        </label>

        <button type="button" className="add__button" onClick={handelToAddSite}>
          Ajouter <AddIcon />
        </button>
      </div>
      <div className="create-site-box">
        <table className="create-site-table">
          {sites.map((site, i) => (
            <tbody key={site.id}>
              <tr>
                <td className={i % 2 === 0 ? "" : "even"}>
                  {site.site}
                  <div>
                    <DeleteIcon
                      onClick={() => handleToDeleteSite(site.id)}
                      className="delete-icon"
                    />
                    <EditIcon
                      className="edit-icon"
                      onClick={() => handelToEditSite(site.id)}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      {/* <form action="">
        
        <div className="input-container ic2">
          <input
            id="production"
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="production" className="placeholder">
            Production
          </label>
        </div>
        <div className="input-container ic2">
          <input id="proNum" className="input" type="number" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="proNum" className="placeholder">
            Nombre
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="poussinier"
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="poussinier" className="placeholder">
            Poussiniere
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="poussNum"
            className="input"
            type="number"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="poussNum" className="placeholder">
            Nombre
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
      </form> */}
    </div>
  );
}

export default SitesManage;
