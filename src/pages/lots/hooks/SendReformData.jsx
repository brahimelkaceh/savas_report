const createLotForBuilding = (buildingId, apiUrl, lotData) => {
  const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

  fetch(`${apiUrl}add-lot/${buildingId}`, {
    method: "POST",
    body: JSON.stringify(lotData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        setOpenDeleteModal(true);
        throw new Error(
          "Un bâtiment ne peut en aucun cas comporter plus d'un lot."
        );
      } else {
        setOpenSuccessModal(true);
        setMessage("Lot créé avec succès!");
      }
    })
    .catch((err) => {
      setError(err.message);
    });
};

createLotForBuilding(buildingId, apiUrl, lotData);
