import { useState } from "react";
import DailyTableHeader from "./DailyTableHeader";
import StreamIcon from "@mui/icons-material/Stream";
import EggIcon from "@mui/icons-material/Egg";
import { CiWheat } from "react-icons/ci";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import TodayIcon from "@mui/icons-material/Today";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScaleIcon from "@mui/icons-material/Scale";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ConsoChartModel from "../models/ConsoChartModel";
import ProdChartModel from "../models/ProdChartModel";
import SwiperModal from "../models/SwiperModal";
function FixedHeader({
  dailyData,
  homogPvData,
  mortData,
  consoData,
  prodData,
  Peroformloading,
}) {
  const [open, setOpen] = useState(false);
  const [openConsoChartModel, setOpenConsoChartModel] = useState(false);
  const [openProdChartModel, setOpenProdChartModel] = useState(false);
  return (
    <>
      {open && <SwiperModal open={open} setOpen={setOpen} />}
      {openConsoChartModel && (
        <ConsoChartModel
          openConsoChartModel={openConsoChartModel}
          setOpenConsoChartModel={setOpenConsoChartModel}
        />
      )}
      {openProdChartModel && (
        <ProdChartModel
          openProdChartModel={openProdChartModel}
          setOpenProdChartModel={setOpenProdChartModel}
        />
      )}
      <tr className="main-header">
        <th></th>
        <th colSpan={3} className="calendrie">
          <span>
            Calendrie <TodayIcon></TodayIcon>
          </span>
        </th>
        <th className="ambiance" colSpan={3}>
          <span>
            Ambiance <SentimentSatisfiedIcon></SentimentSatisfiedIcon>
          </span>
        </th>
        <th className="viability" colSpan={6} onClick={() => setOpen(true)}>
          <span>
            Viabilité <StreamIcon></StreamIcon> <SsidChartIcon></SsidChartIcon>
          </span>
        </th>
        <th
          className="consommation"
          colSpan={7}
          onClick={() => setOpenConsoChartModel(true)}
        >
          <span>
            Consommation <CiWheat></CiWheat>
            <SsidChartIcon></SsidChartIcon>
          </span>
        </th>
        <th
          className="production-header"
          colSpan={5}
          onClick={() => setOpenProdChartModel(true)}
        >
          <span>
            Production <EggIcon></EggIcon>
            <SsidChartIcon></SsidChartIcon>
          </span>
        </th>
        <th colSpan={2} className="masse-oeuf">
          <span>
            Masse d'Oeuf <ScaleIcon></ScaleIcon>
          </span>
        </th>
        <th colSpan={3} className="ic-header">
          <span>
            indices de convertion{" "}
            <PublishedWithChangesIcon></PublishedWithChangesIcon>
          </span>
        </th>
      </tr>
      {
        <DailyTableHeader
          dailyData={dailyData}
          homogPvData={homogPvData}
          mortData={mortData}
          consoData={consoData}
          prodData={prodData}
          Peroformloading={Peroformloading}
        />
      }
    </>
  );
}

export default FixedHeader;
