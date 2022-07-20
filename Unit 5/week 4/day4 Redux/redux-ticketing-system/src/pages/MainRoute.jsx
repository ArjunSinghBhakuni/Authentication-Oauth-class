import { Stack } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ReqAuth from "../component/ReqAuth";
import Sidebar from "../component/Sidebar";
import HomePage from "./HomePage";
import Login from "./Login";
import SingUp from "./SingUp";
const MainRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>

          <Stack direction="row">
            <Sidebar />
            <HomePage />
          </Stack>
          </ReqAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SingUp />} />
    </Routes>
  );
};

export default MainRoute;
