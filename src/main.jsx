import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

import { todoReducer } from "./reducers";

export const store = configureStore({ reducer: todoReducer });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
