import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useState } from "react";
let base_url = "https://pouliprod.savas.ma/api/";

function Observation() {
  const [observation, setObservation] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchObservationData = async () => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}observs-list/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        console.log(JSON.parse(data));
        setObservation(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchObservationData();
  }, []);
  return (
    <div className="observations">
      <h1 className="title">Observations </h1>
      {observation &&
        observation.map((observ, index) => (
          <div className="card-item" key={index}>
            {/* <div>
                <OfflineBoltIcon className="card-icon" />
              </div> */}
            <div className="card-content">
              <div className="card-title">{observ.bat}</div>
              {observ.observs.map((obsv, index) => (
                <p key={index} className="info">
                  <InfoIcon className="card-info" /> {obsv.text}
                </p>
              ))}
              <div className="card-date">{observ.date}</div>
            </div>
          </div>
        ))}
      {/* <div className="card-item ">
        <div>
          <OfflineBoltIcon className="card-icon" />
        </div>
        <div className="card-content">
          <div className="card-title">Site (bâtiment)</div>

          <p>
            Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing elit.
            Blanditiis, voluptatem?
          </p>
          <div className="card-date">15 May 2020 9:00 am</div>
        </div>
      </div>
      <div className="card-item good">
        <div>
          <CheckCircleIcon className="card-icon good" />
        </div>
        <div className="card-content">
          <div className="card-title">Site (bâtiment)</div>

          <p>
            Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing elit.
            Blanditiis, voluptatem?
          </p>
          <div className="card-date">15 May 2020 9:00 am</div>
        </div>
      </div>
      <div className="card-item danger">
        <div>
          <ErrorIcon className="card-icon danger" />
        </div>
        <div className="card-content">
          <div className="card-title">Site (bâtiment)</div>

          <p>
            Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing elit.
            Blanditiis, voluptatem?
          </p>
          <div className="card-date">15 May 2020 9:00 am</div>
        </div>
      </div>
      <div className="card-item info">
        <div>
          <InfoIcon className="card-icon info" />
        </div>
        <div className="card-content">
          <div className="card-title">Site (bâtiment)</div>

          <p>
            Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing elit.
            Blanditiis, voluptatem?
          </p>
          <div className="card-date">15 May 2020 9:00 am</div>
        </div>
      </div>
      <div className="card-item good">
        <div>
          <CheckCircleIcon className="card-icon good" />
        </div>
        <div className="card-content">
          <div className="card-title">Site (bâtiment)</div>

          <p>
            Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing elit.
            Blanditiis, voluptatem?
          </p>
          <div className="card-date">15 May 2020 9:00 am</div>
        </div>
      </div>
      <div className="card-item danger">
        <div>
          <ErrorIcon className="card-icon danger" />
        </div>
        <div className="card-content">
          <div className="card-title">Site (bâtiment)</div>

          <p>
            Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing elit.
            Blanditiis, voluptatem?
          </p>
          <div className="card-date">15 May 2020 9:00 am</div>
        </div>
      </div> */}
    </div>
  );
}

export default Observation;
