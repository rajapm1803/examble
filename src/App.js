import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "./Component/Home";
import { Course } from "./Component/Course";
import { Search } from "./Pages/Search";
import { Last } from "./Pages/Last";

function App() {
  return (
      <>
      <nav
        style={{
          fontSize: "20px",
          fontWeight: "800",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/course"}>Courses</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />}>
          <Route path="search" element={<Search/>}/>
          <Route path="list" element={<Last />}/>
        </Route>
      </Routes>
      </>
  );
}

export default App;
