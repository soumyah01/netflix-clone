const express= require("express");
const app=express();

const port=process.env.PORT || 5000;

app.listen(port, () => console.log("Server is satted at 5000"));import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Signup
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}