import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { PhoneBook } from "./pages/Phonebook";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AddContactPage } from "./pages/AddContact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/phonebook" element={<PhoneBook />} exact />
            <Route
              path="/contacts/addContact"
              element={<AddContactPage />}
              exact
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
