import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
