import { Route, Routes, useLocation } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import { Container } from "../components/styles/Container.styled";
import Login from "../components/Login";
import Register from "../components/Register";

const Home = () => {
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
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
};

export default Home;
