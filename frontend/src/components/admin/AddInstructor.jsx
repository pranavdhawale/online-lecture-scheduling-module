import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function AddInstructor() {
    const [inputs, setInputs] = useState({})

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:9000/admin/add-instructor", inputs)
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
        <p className="text-3xl">Add Instructor</p>

        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" onChange={handleChanges}/>
            <input type="email" name="email" placeholder="Enter Email" onChange={handleChanges}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}