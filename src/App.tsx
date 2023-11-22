import React from "react";
//import UserList from "./Components/UserList";
import Users from "./Components/Users";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import UserDetails from "./Components/UserDetails";
import UserList from "./Components/UserList";
import NewUsers from "./Components/NewUsers";
//import Login from "./Components/Login";
//import AuthUser from "./Components/AuthUser";
//import Counter from "./Components/Counter";
//import Youtube from "./Components/Youtube";
// import Customer from "./Components/Customer";
// import Users from "./Components/Users";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/Users/:id" element={<UserDetails/>} />
                <Route path="/UserList" element={<UserList />} />
                <Route path="/NewUsers" element={<NewUsers />} />
                <Route path="/Login" element={<Login />} />
            </Routes>

        </>

        /*<div className="container">
            <div className="row"> 
                <div className="col-md-6">
                    <Customer name="Arsh" />
                </div>
                <div className="col-md-6">
                    <Users userId={1} userName="Arsh"/>
                </div> 
                <Counter/>
                <Youtube/>

                <Login/>
                <AuthUser/>
                <UserList/>
                <Users/>
            </div>
        </div> */
    );
}

export default App