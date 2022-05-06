import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import ProductStoreService from "./services/productstore-service";
import { ProductStoreServiceProvider } from "./components/productstore-service-context";

import store from "./store";

const productStoreService = new ProductStoreService();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ProductStoreServiceProvider value={productStoreService}>
        <Router>
          <App />
        </Router>
      </ProductStoreServiceProvider>
    </ErrorBoundry>
  </Provider>
);
