import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function AllocateLecture() {

    const [inputs, setInputs] = useState({})
    const [instructor, setInstructors] = useState(null)
    const [course, setCourses] = useState(null)

    useEffect(() => {
        axios
        .get("http://localhost:9000/admin/instructor-list")
        .then((res) => {
            setInstructors(res.data.instructors)
        })

        axios
        .get("http://localhost:9000/admin/course-list")
        .then((res) => {
            setCourses(res.data.courses)
        })
    }, [])

    // useEffect(() => {
    //     console.log(inputs);
    // }, [inputs])

    if(!instructor) return null
    if(!course) return null

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
        .post("http://localhost:9000/admin/allocate-lecture", inputs)
        .then((res) => {
            alert(res.data.messsage)
        })
        .catch((err) => {
            console.log('error : ',err);
            alert(err.response.data.message);
        });
        // e.target.reset();
    }


    return(
        <>
        <NavLink to="/admin/dashboard"><button>Back</button></NavLink>
        <p className="text-3xl">Allocate Lecture</p>

        <form onSubmit={handleSubmit}>
            <div>
                <select name="instructor_name" onChange={handleChanges}>
                    <option>Select Instructor</option>
                    {
                    instructor.map((element) => {
                        return(
                            <option value={element.name} key={element.name}>{element.name}</option>
                        )
                    })
                    }
                </select>
            </div>
            <fieldset>
                <div>
                    {
                        course.map((element) => {
                            return(
                                <>
                                    <input id={element.name} name="course_name" type="radio" value={element.name} onChange={handleChanges} key={element.name} />
                                    <label htmlFor={element.name}>{element.name}</label>
                                </>
                            )
                        })
                    }
                </div>
            </fieldset>

            <div>
                <input type="date" name="date" onChange={handleChanges}/>
            </div>

            <div>
                <input type="submit"/>
            </div>

            </form>
        </>
    )
}