import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./app/App";

import store from "./app/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
