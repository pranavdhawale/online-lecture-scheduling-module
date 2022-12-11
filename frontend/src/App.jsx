import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AdminDashboard from "./components/AdminDashboard";
import AddInstructor from "./components/admin/AddInstructor";
import ViewInstructors from "./components/admin/ViewInstructors";
import AddCourse from "./components/admin/AddCourse";
import ViewCourses from "./components/admin/ViewCourse";
import AllocateLecture from "./components/admin/AllocateLecture";
import AllocatedLecture from "./components/admin/AllocatedLecture";

export default function App() {
  return(
    <>
    <Routes>
      <Route exact path="/" element={< LoginPage />}/>
      <Route exact path="/dashboard" element={<AdminDashboard />}/>
      <Route exact path="/add-instructor" element={<AddInstructor />}/>
      <Route exact path="/view-instructors" element={<ViewInstructors />}/>
      <Route exact path="/add-course" element={<AddCourse />}/>
      <Route exact path="/view-courses" element={<ViewCourses />}/>
      <Route exact path="/allocate-lecture" element={<AllocateLecture />}/>
      <Route exact path="/allocated-lecture" element={<AllocatedLecture />}/>
    </Routes>
    </>
  )
}