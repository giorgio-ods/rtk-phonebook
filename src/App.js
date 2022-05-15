import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { PhoneBook } from "./pages/Phonebook";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/phonebook" element={<PhoneBook />} exact />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
