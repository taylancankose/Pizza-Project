import { Route, Routes } from "react-router-dom";
import Home from "./pages/1.home/Home";
import Order from "./pages/2.order/Order";
import Success from "./pages/3.success/Success";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Error from "./pages/4.error/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
