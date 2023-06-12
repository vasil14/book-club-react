import { Route, Routes, useLocation } from "react-router-dom";

import Login from "./containers/login/Login";
import Register from "./containers/register/registerForm";
import Home from "./containers/Home";
import Menu from "./components/menu/indexMenu";
import Book from "./containers/Book";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.match("/login") ||
      location.pathname.match("/register") ? (
        ""
      ) : (
        <Menu />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book/:slug" element={<Book />} />
        <Route path="/books/:category" element={<Book />} />
      </Routes>
    </>
  );
};

export default App;
