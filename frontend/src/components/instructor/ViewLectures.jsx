import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function ViewLectures() {

    const [lecture, setLectures] = useState([])
    const info = JSON.parse(sessionStorage.getItem('info'))
    
    useEffect(() => {
        axios
        .get(`http://localhost:9000/instructor/allocated-lecture-list/${info.name}`)
        .then((res) => {
            setLectures(res.data.lectures)
        })
    }, [])
    if(!lecture) return null

    return(
        <>
        <NavLink to="/instructor/dashboard"><button>Back</button></NavLink>
        <p className="text-3xl">View Lecture</p>

        <table>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    lecture.map((element) => {
                        return(
                            <tr>
                                <td>{element.course_name}</td>
                                <td>{element.date}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}