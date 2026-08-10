import { useContext } from "react";
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom";

import "./App.css"
import { ThemeContext } from "./context/ThemeContext";
function App() {
  const { state } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          backgroundColor: state.theme === "light" ? "#fff" : "#121212",
          color: state.theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
        }}>

        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App;