import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function AllocatedLecture() {

    const [inputs, setInputs] = useState({})
    const [instructor, setInstructors] = useState(null)
    const [lecture, setLectures] = useState([])

    useEffect(() => {
        axios
        .get("http://localhost:9000/admin/instructor-list")
        .then((res) => {
            setInstructors(res.data.instructors)
        })
    }, [])

    if(!instructor) return null

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
        .post(`http://localhost:9000/admin/allocated-lecture-list/${document.getElementById('instructorName').value}`, inputs)
        .then((res) => {
            setLectures(res.data.lectures)
        })
        .catch((err) => {
            console.log('error : ',err);
            alert(err.response.data.message);
        });
    }


    return(
        <>
        <NavLink to="/admin/dashboard"><button>Back</button></NavLink>
        <p className="text-3xl">Allocated Lecture</p>

        <select id="instructorName" onClick={handleChanges}>
            <option>Select Instructor</option>
            {
            instructor.map((element)=>{
                return(
                <option value={element.name}>{element.name}</option>
                )
            })}
        </select>
        <form onSubmit={handleSubmit}>

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

            <button type="submit">GET</button>
        </form>
        </>
    )
}