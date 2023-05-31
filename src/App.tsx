import { Route, Routes, useLocation } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { Container } from "./components/styles/Container.styled";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Home from "./containers/Home";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.match("/login") ||
      location.pathname.match("/register") ? (
        ""
      ) : (
        <NavbarComponent />
      )}

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
