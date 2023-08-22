import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Store } from "./Redux/Store/Store";
import { Provider } from "react-redux";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={Store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>

</Provider>
);
