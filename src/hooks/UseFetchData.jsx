import { useState, useEffect, useRef } from "react";
function UseFetchData(url, open, renderData, openDeleteModal) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const controllerRef = useRef(new AbortController());

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const accessToken = JSON.parse(
          localStorage.getItem("authTokens")
        ).access;
        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(url, requestOptions);

        const result = await response.json();
        if (response.status === 200) {
          setData(result);
        } else {
          setData([]);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setError("no data");
        }
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();

    // Cleanup function to abort the fetch request when the component is unmounted
    return () => controllerRef.current.abort();
  }, [renderData, open, openDeleteModal, url]); // Dependency array ensures the effect runs only when the URL changes

  return { data, loading, error };
}

export default UseFetchData;
