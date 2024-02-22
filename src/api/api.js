let base_url = "https://farmdriver.savas.ma/api/";

const api = {
  //! production lots
  getLotTitles: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(`${base_url}get-lots-titles/?site=${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  //! Production sites
  getProdSites: async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(`${base_url}get-sites-titles/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  //! Poussinieres sites
  getPoussSites: async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(`${base_url}get-pouss-sites/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  },

  //! Poussinieres lots
  getPoussLot: async (id) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(
        `${base_url}get-pouss-lots/?site=${id}&table=${1}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        return response.status;
      }
      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  },

  //! get next send in poussiniere
  getPoussNext: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(`${base_url}get-pouss-next/?lotId=${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  //! All sites
  getAllSites: async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(`${base_url}get-sites/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  //! All Bats
  getAllBats: async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;
      const response = await fetch(`${base_url}get-bats/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  //! Create Observation
  createObservation: async (observationData) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(`${base_url}add-observ/`, {
        method: "POST", // Assuming you use POST method for creating observations
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(observationData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return { response: response.ok };
    } catch (error) {
      console.error(error);
    }
  },
  // !
  getMultiCharts: async (lot, courbeId) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(
        `${base_url}compare-multi-charts/?lots=${JSON.stringify(
          lot
        )}&courbe=${courbeId}`,
        {
          method: "GET", // Assuming you use POST method for creating observations
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  },
  // ! Create a new prophylaxis programm
  createProphylaxi: async (data) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(`${base_url}add-execution-proph-program/`, {
        method: "POST", // Assuming you use POST method for creating observations
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return { response: response.ok };
    } catch (error) {
      console.error(error);
    }
  },
  //! Delete Prophylaxis programm
  deleteProhpylaxi: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(
        `${base_url}delete-prophylaxis-program/?id=${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  //! Change the status of the prophylaxis
  changeProphylaxiStatus: async (data) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(`${base_url}change-proph-status/`, {
        method: "POST", // Assuming you use POST method for creating observations
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const status = await response.json();

      return { response, status };
    } catch (error) {
      console.error(error);
    }
  },
  // ! Get Execution Prphylaxis program
  getExecPrphProg: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(
        `${base_url}get-execution-proph-program/?prophylaxis=${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return { data, response };
    } catch (error) {
      console.error(error);
    }
  },
  // ! Delete Execution Prphylaxis program
  deleteExecPrphProg: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(
        `${base_url}delete-execution-proph-program/?id=${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  //! Update Batiment
  updateBatiment: async (observationData) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(`${base_url}update-batmnt/`, {
        method: "POST", // Assuming you use POST method for creating observations
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(observationData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return { response: response.ok };
    } catch (error) {
      console.error(error);
    }
  },
};

export default api;

// const fetchLotData = async (id) => {
//   try {
//     setLoading(true);
//     const result = await api.getLotTitles(id);
//     console.log(result);
//     setLotData(result);
//   } catch (error) {
//     setError("failed to fetch");
//   } finally {
//     setLoading(false);
//   }
// };
