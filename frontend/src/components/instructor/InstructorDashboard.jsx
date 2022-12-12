import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function InstructorDashboard() {
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
            <NavLink to="/instructor/view-lectures">
                <button className="border">VIEW LECTURES</button>
            </NavLink>
        </div>
        </>
    )
}