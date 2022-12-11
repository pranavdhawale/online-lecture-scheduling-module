import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import AddInstructor from "./components/AddInstructor";
import AddCourse from "./components/AddCourse";
import AllocateLecture from "./components/AllocateLecture";

export default function App() {
  return(
    <>
    <Routes>
      <Route exact path="/" element={< LoginPage />}/>
      <Route exact path="/dashboard" element={<Dashboard />}/>
      <Route exact path="/add-instructor" element={<AddInstructor />}/>
      <Route exact path="/add-course" element={<AddCourse />}/>
      <Route exact path="/allocate-lecture" element={<AllocateLecture />}/>
    </Routes>
    </>
  )
}