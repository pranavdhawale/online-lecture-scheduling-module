import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [inputs, setInputs] = useState({})

    const navigate = useNavigate()

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:9000/admin/login", inputs)
        .then((res) => {
            alert(res.data.message);
            // console.log(res.data.user);
            sessionStorage.setItem("info", JSON.stringify(res.data.user))
            navigate("/dashboard")
        })
        .catch((err) => {
            console.log('error : ',err);
            alert(err.response.data.message);
        });
        e.target.reset();
    };



    return(
        <>
        <p className="text-3xl">Login Page</p>

        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Enter Username" onChange={handleChanges}/>
            <input type="password" name="password" placeholder="Enter Password" onChange={handleChanges}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}