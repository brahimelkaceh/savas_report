import BatsManage from "./BatsManage";
import BatsTable from "./BatsTable";

function Bats({ CreateBatiments, UpdateBatimentData, setAlert, siteName }) {
  return (
    <div className="manage-bats slit-in-horizontal">
      <BatsManage
        CreateBatiments={CreateBatiments}
        setAlert={setAlert}
        siteName={siteName}
      />
      <BatsTable UpdateBatimentData={UpdateBatimentData} siteName={siteName} />
    </div>
  );
}

export default Bats;
