import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/home";
import JobDetails from "./pages/jobDetails/JobDetails";
import Addjob from "./pages/Addjob/Addjob";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exac path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobdetails" element={<JobDetails />} />
          <Route path="/addjob" element={<Addjob />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
