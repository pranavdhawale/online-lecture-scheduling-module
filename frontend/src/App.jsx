import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AdminDashboard from "./components/admin/AdminDashboard";
import AddInstructor from "./components/admin/AddInstructor";
import ViewInstructors from "./components/admin/ViewInstructors";
import AddCourse from "./components/admin/AddCourse";
import ViewCourses from "./components/admin/ViewCourse";
import AllocateLecture from "./components/admin/AllocateLecture";
import AllocatedLecture from "./components/admin/AllocatedLecture";

import InstructorDashboard from "./components/instructor/InstructorDashboard";
import ViewLectures from "./components/instructor/ViewLectures";

export default function App() {
  return(
    <>
    <Routes>
      <Route exact path="/" element={< LoginPage />}/>
      <Route exact path="/admin/dashboard" element={<AdminDashboard />}/>
      <Route exact path="/admin/add-instructor" element={<AddInstructor />}/>
      <Route exact path="/admin/view-instructors" element={<ViewInstructors />}/>
      <Route exact path="/admin/add-course" element={<AddCourse />}/>
      <Route exact path="/admin/view-courses" element={<ViewCourses />}/>
      <Route exact path="/admin/allocate-lecture" element={<AllocateLecture />}/>
      <Route exact path="/admin/allocated-lecture" element={<AllocatedLecture />}/>
      <Route exact path="/instructor/dashboard" element={<InstructorDashboard />}/>
      <Route exact path="/instructor/view-lectures" element={<ViewLectures />}/>
    </Routes>
    </>
  )
}