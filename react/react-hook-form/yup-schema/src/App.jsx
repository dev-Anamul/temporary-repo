import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
