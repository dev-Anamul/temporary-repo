import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Layout from "./components/Layount";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
