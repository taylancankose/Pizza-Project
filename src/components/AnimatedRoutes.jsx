import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/1.home/Home";
import Order from "../pages/2.order/Order";
import Success from "../pages/3.success/Success";
import Error from "../pages/4.error/Error";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
