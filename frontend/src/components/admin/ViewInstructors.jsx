import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function ViewInstructors() {
    const [instructor, setInstructors] = useState(null)

    useEffect(() => {
        axios
        .get("http://localhost:9000/admin/instructor-list")
        .then((res) => {
            setInstructors(res.data.instructors)
        })
    }, [])
    if(!instructor) return null


    return(
        <>
        <NavLink to="/dashboard"><button>Back</button></NavLink>
        <p className="text-3xl">View Instructors</p>

        <table className="border">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    instructor.map((element) => {
                        return(
                            <tr>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}