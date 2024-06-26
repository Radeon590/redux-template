import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './store/store';
import App from "./containers/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
  </StrictMode>
);