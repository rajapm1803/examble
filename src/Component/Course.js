import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Course = () => {
  return (
    <>
    <div  style={{ display: "flex", justifyContent: "center" }}>
        <h1>Course page</h1>
    </div>
     <nav
        style={{
          fontSize: "20px",
          fontWeight: "800",
          display: "flex",
          justifyContent: "space-around",
        }}
        >
        <Link to={"/course/search"}>Search</Link>
        <Link to={"/course/list"}>List</Link>
      </nav>
        <Outlet/>
    </>
  )
}
