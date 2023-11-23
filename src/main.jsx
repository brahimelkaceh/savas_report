import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChartProvider } from "./context/ChartsContext";
import { GlobalProvider } from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <ChartProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ChartProvider> */}
  </Provider>
  // </React.StrictMode>
);
