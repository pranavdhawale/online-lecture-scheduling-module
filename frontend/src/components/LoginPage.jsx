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

        if(document.getElementById('whoami').value == "default") {
            alert("Please select user")
        }

        if(document.getElementById('whoami').value == "admin") {
            axios
            .post("http://localhost:9000/admin/login", inputs)
            .then((res) => {
                alert(res.data.message);
                // console.log(res.data.user);
                sessionStorage.setItem("info", JSON.stringify(res.data.user))
                navigate("/admin/dashboard")
            })
            .catch((err) => {
                console.log('error : ',err);
                alert(err.response.data.message);
            });
            e.target.reset();
        }

        if(document.getElementById('whoami').value == "instructor") {
            console.log("instructor login");
            axios
            .post("http://localhost:9000/instructor/login", inputs)
            .then((res) => {
                alert(res.data.message);
                sessionStorage.setItem("info", JSON.stringify(res.data.user))
                navigate("/instructor/dashboard")
            })
            .catch((err) => {
                console.log('error : ',err);
                alert(err.response.data.message);
            });
            e.target.reset();
        }

    };



    return(
        <>
        <p className="text-3xl">Login Page</p>

        <form onSubmit={handleSubmit}>
            <select id="whoami" onChange={() => {

            }}>
                <option value="default">Select whoami</option>
                <option value="admin">Admin</option>
                <option value="instructor">Instructor</option>
            </select>

            <input required type="text" name="username" placeholder="Enter Username" onChange={handleChanges}/>
            <input required type="password" name="password" placeholder="Enter Password" onChange={handleChanges}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}