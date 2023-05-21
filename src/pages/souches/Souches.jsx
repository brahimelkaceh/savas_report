import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { closeDrop } from "../../slices/UserDrop";
import { MdAdd } from "react-icons/md";
import { AiFillEye, AiFillEdit } from "react-icons/ai";

import "./souches.css";

import { useSelector, useDispatch } from "react-redux";
import ExportBtn from "../../components/buttons/ExportBtn";

const Souches = () => {
  const status = useSelector((state) => state.toggleLeftBar.status);

  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);
  const dropState = useSelector((state) => state.userDrop.dropState);

  const dispatch = useDispatch();

  return (
    <>
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        <Topbar
          isVisualize={!isVisualize}
          onClick={() => dropState && dispatch(closeDrop())}
        />
        <Sidebar />
        <div className="souche-container">
          <div className="souche-header">
            <h3>Gestion des Souche</h3>
            <button class="add-btn">
              <MdAdd className="bell" />
            </button>
          </div>
          <div className="guide-table slit-in-horizontal">
            <table className="">
              <thead className="fixed-header">
                <tr>
                  <th>Nom de souche</th>
                  <th>Nom de guide</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="active">
                  <td>Lorem, ipsum.</td>
                  <td>Lorem, ipsum.</td>
                  <td className="guide-action">
                    <label className="switch-guide">
                      <input type="checkbox" defaultChecked="checked" />
                    </label>
                    <AiFillEye className="eye-icon" />
                    <AiFillEdit className="edit-icon" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem, ipsum.</td>
                  <td>Lorem, ipsum.</td>
                  <td className="guide-action">
                    <label className="switch-guide">
                      <input type="checkbox" defaultChecked="" checked="" />
                    </label>
                    <AiFillEye className="eye-icon" />
                    <AiFillEdit className="edit-icon" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem, ipsum.</td>
                  <td>Lorem, ipsum.</td>
                  <td className="guide-action">
                    <label className="switch-guide">
                      <input type="checkbox" defaultChecked="" checked="" />
                    </label>
                    <AiFillEye className="eye-icon" />
                    <AiFillEdit className="edit-icon" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem, ipsum.</td>
                  <td>Lorem, ipsum.</td>
                  <td className="guide-action">
                    <label className="switch-guide">
                      <input type="checkbox" defaultChecked="" checked="" />
                    </label>
                    <AiFillEye className="eye-icon" />
                    <AiFillEdit className="edit-icon" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem, ipsum.</td>
                  <td>Lorem, ipsum.</td>
                  <td className="guide-action">
                    <label className="switch-guide">
                      <input type="checkbox" defaultChecked="" checked="" />
                    </label>
                    <AiFillEye className="eye-icon" />
                    <AiFillEdit className="edit-icon" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem, ipsum.</td>
                  <td>Lorem, ipsum.</td>
                  <td className="guide-action">
                    <label className="switch-guide">
                      <input type="checkbox" defaultChecked="" checked="" />
                    </label>
                    <AiFillEye className="eye-icon" />
                    <AiFillEdit className="edit-icon" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem, ipsum.</td>
                  <td>Lorem, ipsum.</td>
                  <td className="guide-action">
                    <label className="switch-guide">
                      <input type="checkbox" defaultChecked="" checked="" />
                    </label>
                    <AiFillEye className="eye-icon" />
                    <AiFillEdit className="edit-icon" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem, ipsum.</td>
                  <td>Lorem, ipsum.</td>
                  <td className="guide-action">
                    <label className="switch-guide">
                      <input type="checkbox" defaultChecked="" checked="" />
                    </label>
                    <AiFillEye className="eye-icon" />
                    <AiFillEdit className="edit-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="souche-table slit-in-horizontal">
            <table className="">
              <thead className="fixed-header">
                <tr>
                  <th>Type</th>
                  <th>Age</th>
                  <th>mortalité / Sem</th>
                  <th>∑ mortalité /PD</th>
                  <th>Ponte</th>
                  <th>NopppSem</th>
                  <th>Noppp ∑</th>
                  <th>NoppdSem</th>
                  <th>Noppd ∑</th>
                  <th>Poid vif</th>
                  <th>Homog</th>
                  <th>PMO</th>
                  <th>APS</th>
                  <th>Aliment ∑ / Sem PP</th>
                  <th>Aliment ∑ PD</th>
                  <th>Aliment ∑ / OeufPD</th>
                  <th>Mass Oe / Sem PP</th>
                  <th>Mass Oe ∑ PP</th>
                  <th>Mass Oe / Sem PD</th>
                  <th>Mass Oe ∑ PD</th>
                  <th>Ic / Sem</th>
                  <th>Ic ∑</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
                <tr>
                  <td>production</td>
                  <td>18</td>
                  <td>0.05</td>
                  <td>0.05</td>
                  <td>4.4</td>
                  <td>0.31</td>
                  <td>0.31</td>
                  <td>0.3</td>
                  <td>0.3</td>
                  <td>1610</td>
                  <td>80</td>
                  <td>46.5</td>
                  <td>81</td>
                  <td>567</td>
                  <td>563.5</td>
                  <td>1878.33</td>
                  <td>14.322</td>
                  <td>14.32</td>
                  <td>14</td>
                  <td>14.3</td>
                  <td>39.59</td>
                  <td>39.36</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Souches;
