import React from "react";
import ReactDOM from "react-dom";

import "./css/bootstrap.min.css";
import "./font-awesome/css/font-awesome.css";
import "./css/plugins/iCheck/custom.css";
import "./css/animate.css";
import "./css/custom.css";
import "./css/plugins/footable/footable.core.css";
import "./css/plugins/steps/jquery.steps.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NotificationProvider from "./notification-provider";

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
