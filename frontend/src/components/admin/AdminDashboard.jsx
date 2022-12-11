import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function AdminDashboard() {
    const [content, setContent] = useState({})

    useEffect(() => {
        setContent(JSON.parse(sessionStorage.getItem("info")))
    }, [])

    return(
        <>
        <p className="text-3xl">Dashboard</p>

        <p>Username : {content.username}</p>
        <p>Name : {content.name}</p>

        <div>
            <NavLink to="/admin/add-instructor">
                <button className="border">ADD INSTRUCTOR</button>
            </NavLink>
            <NavLink to="/admin/view-instructors">
                <button className="border">VIEW INSTRUCTORS</button>
            </NavLink>
        </div>

        <br />
        
        <div>
            <NavLink to="/admin/add-course">
                <button className="border">ADD COURSE</button>
            </NavLink>
            <NavLink to="/admin/view-courses">
                <button className="border">VIEW COURSES</button>
            </NavLink>
        </div>
        
        <br />
        
        <div>
            <NavLink to="/admin/allocate-lecture">
                <button className="border">ALLOCATE LECTURE</button>
            </NavLink>
            <NavLink to="/admin/allocated-lecture">
                <button className="border">ALLOCATED LECTURE</button>
            </NavLink>
        </div>
        </>
    )
}