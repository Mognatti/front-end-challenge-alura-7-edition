import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { Footer } from "./Components/Footer";
import { useState } from "react";

export default function AppRoutes() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header {...{ search, setSearch }} />
      <Routes>
        <Route path="/" element={<Home {...{ search }} />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
