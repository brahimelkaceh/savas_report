import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  LinearProgress,
  Stack,
} from "@mui/material";
import { ProhylaxieListTable } from "./sections/ProhylaxieListTable";
import CreateProphylaxi from "./sections/CreateProphylaxi";
import { Sync } from "@mui/icons-material";
import { ProphylaxieInitials } from "./sections/ProphylaxieInitials";
import SelectedComponents from "./components/SelectedComponents";
let base_url = "https://farmdriver.savas.ma/api/";

const Prophylaxie = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [sendFileMessage, setSendFileMessage] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lotId, setLotId] = useState(null);
  const [selectedLot, setSelectedLot] = useState(null);
  const [refresh, setRefresh] = useState(new Date().getMilliseconds());
  const fetchData = async (id) => {
    try {
      setLoading(true);
      const authTokens = JSON.parse(localStorage.getItem("authTokens"));
      if (!authTokens || !authTokens.access) {
        throw new Error("Access token not found");
      }
      const accessToken = authTokens.access;

      const response = await fetch(
        `${base_url}get-prophylaxis-program/?lotId=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const fetchedData = await response.json();
      if (response.ok) {
        setData(fetchedData);
        setError("");
      } else {
        setError("Introuvable");
        setData([]);
      }
    } catch (error) {
      setError("Introuvable");
      setData([]);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  useEffect(() => {
    setData([]);
    setSelectedFile(null);
  }, [lotId]);

  return (
    <main className="page">
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Card>
            <div className="settings-container">
              {/* <CreateProphylaxi reftching={fetchData} lotId={lotId} /> */}
              {error && (
                <Alert
                  severity="error"
                  variant="filled"
                  sx={{
                    mb: 1,
                  }}
                >
                  {error}
                </Alert>
              )}
              <Stack flexDirection="row" gap={2} justifyContent="space-between">
                <SelectedComponents
                  setLotId={setLotId}
                  lotId={lotId}
                  setSelectedLot={setSelectedLot}
                  refresh={refresh}
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                  sendFileMessage={sendFileMessage}
                />
              </Stack>
            </div>
            {loading && <LinearProgress />}
            {selectedLot && (
              <ProphylaxieInitials
                selectedLot={selectedLot}
                setRefresh={setRefresh}
                setSelectedFile={setSelectedFile}
                selectedFile={selectedFile}
                setSendFileMessage={setSendFileMessage}
                sendFileMessage={sendFileMessage}
                reftching={fetchData}
                setData={setData}
              />
            )}
            <Stack spacing={0}>
              {data && (
                <ProhylaxieListTable
                  data={data}
                  reftching={fetchData}
                  lotId={lotId}
                  setRefresh={setRefresh}
                  setData={setData}
                />
              )}
            </Stack>
          </Card>
        </Container>
      </Box>
    </main>
  );
};

export default Prophylaxie;
