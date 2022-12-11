import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function AddCourse() {
    const [inputs, setInputs] = useState({})

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:9000/admin/add-course", inputs)
        .then((res) => {
            alert(res.data.message);
        })
        .catch((err) => {
            console.log('error : ',err);
            alert(err.response.data.message);
        });
        e.target.reset();
    };



    return(
        <>
        <NavLink to="/admin/dashboard"><button>Back</button></NavLink>
        <p className="text-3xl">Add Course</p>

        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Course Name" onChange={handleChanges}/>
            <input type="text" name="level" placeholder="Enter Level" onChange={handleChanges}/>
            <input type="text" name="description" placeholder="Enter Description" onChange={handleChanges}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}