import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import "./App.css";
import { useContext } from "react";
import { tokenAuthContext } from "./contexts/AuthContex";

function App() {
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth insideRegister={true} />} />
        <Route
          path="/projects"
          element={isAuthorised ? <Projects /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/dashboard"
          element={isAuthorised ? <Dashboard /> : <Navigate to={"/login"} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
