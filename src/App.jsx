import React from "react";
import { ToastContainer } from "react-toastify";
import AnimatedRoutes from "./components/AnimatedRoutes";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <AnimatedRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
