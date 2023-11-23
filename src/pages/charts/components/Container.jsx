import React, { useMemo, useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ProdChart from "../../modification/charts/ProdChart";
import ConsoChart from "../../modification/charts/ConsoChart";
import { useData } from "../../../context/ChartsContext";
import MortChart from "../../modification/charts/MortChart";
import AltChart from "../../modification/charts/AltChart";
import HomogPvChart from "../../modification/charts/HomogPvChart";
import IcChart from "../../modification/charts/IcChart";
import MasseOeufChart from "../../modification/charts/MasseOeufChart";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import UseFetchData from "../../../hooks/UseFetchData";
// const Container = () => {
//   const [fullWidth, setFullWidth] = useState(false);
//   const [fullWidth1, setFullWidth1] = useState(false);
//   const [fullWidth2, setFullWidth2] = useState(false);
//   const [fullWidth3, setFullWidth3] = useState(false);
//   const [fullWidth4, setFullWidth4] = useState(false);
//   const [fullWidth5, setFullWidth5] = useState(false);
//   const [fullWidth6, setFullWidth6] = useState(false);
//   const {
//     data,
//     consoData,
//     altData,
//     homogPvData,
//     icData,
//     mortData,
//     masOeufData,
//   } = useData();
//   return (
//     <div className="charts-container">
//       <div className="main-box">

//         <div className={fullWidth ? "box-1 box" : "box-1"}>
//           <button
//             className="full-screen"
//             onClick={() => {
//               setFullWidth(!fullWidth);
//               setFullWidth1(false);
//               setFullWidth2(false);
//               setFullWidth3(false);
//               setFullWidth4(false);
//               setFullWidth5(false);
//               setFullWidth6(false);
//             }}
//           >
//             {!fullWidth ? (
//               <FullscreenIcon></FullscreenIcon>
//             ) : (
//               <FullscreenExitIcon></FullscreenExitIcon>
//             )}
//           </button>

//           {fullWidth ? <ProdChart prodData={data} /> : <h2> Production</h2>}
//         </div>
//         <div className={fullWidth3 ? "box-4 box" : "box-4"}>
//           <button
//             className="full-screen"
//             onClick={() => {
//               setFullWidth3(!fullWidth3);
//               setFullWidth(false);
//               setFullWidth1(false);
//               setFullWidth2(false);
//               setFullWidth4(false);
//               setFullWidth5(false);
//               setFullWidth6(false);
//             }}
//           >
//             {!fullWidth3 ? (
//               <FullscreenIcon></FullscreenIcon>
//             ) : (
//               <FullscreenExitIcon></FullscreenExitIcon>
//             )}
//           </button>
//           {fullWidth3 ? (
//             <MasseOeufChart masseOeufData={masOeufData} />
//           ) : (
//             <h2> Masse d'oeuf</h2>
//           )}
//         </div>
//         <div className={fullWidth1 ? "box-2 box" : "box-2"}>
//           <button
//             className="full-screen"
//             onClick={() => {
//               setFullWidth1(!fullWidth1);
//               setFullWidth(false);
//               setFullWidth2(false);
//               setFullWidth3(false);
//               setFullWidth4(false);
//               setFullWidth5(false);
//               setFullWidth6(false);
//             }}
//           >
//             {!fullWidth1 ? (
//               <FullscreenIcon></FullscreenIcon>
//             ) : (
//               <FullscreenExitIcon></FullscreenExitIcon>
//             )}
//           </button>
//           {fullWidth1 ? (
//             <ConsoChart consoData={consoData} />
//           ) : (
//             <h2> Consommations</h2>
//           )}
//         </div>
//         <div className={fullWidth2 ? "box-3 box" : "box-3"}>
//           <button
//             className="full-screen"
//             onClick={() => {
//               setFullWidth2(!fullWidth2);
//               setFullWidth(false);
//               setFullWidth1(false);
//               setFullWidth3(false);
//               setFullWidth4(false);
//               setFullWidth5(false);
//               setFullWidth6(false);
//             }}
//           >
//             {!fullWidth2 ? (
//               <FullscreenIcon></FullscreenIcon>
//             ) : (
//               <FullscreenExitIcon></FullscreenExitIcon>
//             )}
//           </button>
//           {fullWidth2 ? (
//             <IcChart icData={icData} />
//           ) : (
//             <h2> Indice de conversion </h2>
//           )}
//         </div>

//         <div className={fullWidth4 ? "box-5 box" : "box-5"}>
//           <button
//             className="full-screen"
//             onClick={() => {
//               setFullWidth4(!fullWidth4);
//               setFullWidth(false);
//               setFullWidth2(false);
//               setFullWidth3(false);
//               setFullWidth1(false);
//               setFullWidth5(false);
//               setFullWidth6(false);
//             }}
//           >
//             {!fullWidth4 ? (
//               <FullscreenIcon></FullscreenIcon>
//             ) : (
//               <FullscreenExitIcon></FullscreenExitIcon>
//             )}
//           </button>
//           {fullWidth4 ? <MortChart mortData={mortData} /> : <h2> Mortalité</h2>}
//         </div>
//         <div className={fullWidth5 ? "box-6 box" : "box-6"}>
//           <button
//             className="full-screen"
//             onClick={() => {
//               setFullWidth5(!fullWidth5);
//               setFullWidth(false);
//               setFullWidth1(false);
//               setFullWidth2(false);
//               setFullWidth3(false);
//               setFullWidth4(false);
//               setFullWidth6(false);
//             }}
//           >
//             {!fullWidth5 ? (
//               <FullscreenIcon></FullscreenIcon>
//             ) : (
//               <FullscreenExitIcon></FullscreenExitIcon>
//             )}{" "}
//           </button>
//           {fullWidth5 ? (
//             <AltChart altOeufData={altData} />
//           ) : (
//             <h2> Aliment / Oeuf</h2>
//           )}
//         </div>
//         <div className={fullWidth6 ? "box-7 box" : "box-7"}>
//           <button
//             className="full-screen"
//             onClick={() => {
//               setFullWidth6(!fullWidth6);
//               setFullWidth(false);
//               setFullWidth1(false);
//               setFullWidth2(false);
//               setFullWidth3(false);
//               setFullWidth4(false);
//               setFullWidth5(false);
//             }}
//           >
//             {!fullWidth6 ? (
//               <FullscreenIcon></FullscreenIcon>
//             ) : (
//               <FullscreenExitIcon></FullscreenExitIcon>
//             )}{" "}
//           </button>
//           {fullWidth6 ? (
//             <HomogPvChart homogPvData={homogPvData} />
//           ) : (
//             <h2> Poids corporel & Homogénéité </h2>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
let base_url = "https://farmdriver.savas.ma/api/";

const Container = () => {
  const [lotId, setLotId] = useState("");
  const lotTitlesApiUrl = useMemo(
    () => `${base_url}get-lots-titles/`,
    [base_url]
  );
  const { data, loading, error } = UseFetchData(lotTitlesApiUrl, "GET");
  const [numberOfDivs, setNumberOfDivs] = useState(1);
  const handleChange = (event) => {
    setLotId(event.target.value);
  };
  const dynamicDivs = Array.from({ length: numberOfDivs }, (_, index) => (
    <div
      key={index}
      style={{
        background: "lightblue",
        marginTop: "10px",
        width: "100%",
      }}
    >
      Dynamic Div {index + 1}
    </div>
  ));
  return (
    <div
      style={{
        height: "100%",

        borderRadius: "5px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex" }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} controled>
          <InputLabel id="demo-simple-select-standard-label">
            Sélectionnez un LOT
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={lotId}
            disabled={loading}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value=""></MenuItem>
            {data &&
              data?.map((title) => {
                return (
                  <MenuItem key={title.id} value={title.id}>
                    {title.code}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setNumberOfDivs(1);
          }}
        >
          reset
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setNumberOfDivs(4);
          }}
        >
          4
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setNumberOfDivs(6);
          }}
        >
          6
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setNumberOfDivs(2);
          }}
        >
          2
        </button>
      </div>
      <div
        style={{
          background: "#ffffff",
          borderRadius: "3px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: numberOfDivs === 1 ? "1fr" : "1fr 1fr",
          gap: "10px",
        }}
      >
        {dynamicDivs}
      </div>
    </div>
  );
};

export default Container;
