import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function ViewCourses() {
    const [course, setCourses] = useState(null)

    useEffect(() => {
        axios
        .get("http://localhost:9000/admin/course-list")
        .then((res) => {
            setCourses(res.data.courses)
        })
    }, [])
    if(!course) return null


    return(
        <>
        <NavLink to="/dashboard"><button>Back</button></NavLink>
        <p className="text-3xl">View Course</p>

        <table className="border">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Level</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    course.map((element) => {
                        return(
                            <tr>
                                <td>{element.name}</td>
                                <td>{element.level}</td>
                                <td>{element.description}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}