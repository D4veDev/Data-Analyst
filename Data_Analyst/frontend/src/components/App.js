import React from "react";

import "./app.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/navbarElements";
import Header from "./header/Header";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar>
                    <Routes>
                        <Route path="/" element={<h1>Home</h1>} />
                        <Route path="/login" element={<h1>Home</h1>} />
                        <Route path="/dashboard" element={<h1>Home</h1>} />
                    </Routes>
                </Navbar>
            </BrowserRouter>
            <Header />
        </div>
    );
}

export default App;
