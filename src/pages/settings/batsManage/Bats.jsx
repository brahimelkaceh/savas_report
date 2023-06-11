import BatsManage from "./BatsManage";
import BatsTable from "./BatsTable";

function Bats({ CreateBatiments, setAlert, siteName }) {
  return (
    <div className="manage-bats slit-in-horizontal">
      <BatsManage
        CreateBatiments={CreateBatiments}
        setAlert={setAlert}
        siteName={siteName}
      />
      <BatsTable />
    </div>
  );
}

export default Bats;
