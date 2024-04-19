import ReactDOM from "react-dom/client";
import React from 'react';
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import "./i18n/i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.Suspense fallback="loading...">
      <App />
    </React.Suspense>
  </ChakraProvider>
);
