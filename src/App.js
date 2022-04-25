import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
