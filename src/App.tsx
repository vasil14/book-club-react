import { Route, Routes, useLocation } from "react-router-dom";

import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Home from "./containers/Home";
import Menu from "./components/menu";
import { Col, Row } from "antd";

const App = () => {
  const location = useLocation();
  return (
    <>
      {/* {location.pathname.match("/login") ||
      location.pathname.match("/register") ? (
        ""
      ) : (
        )} */}
        <Row gutter={[8,8]} style={{borderBottom: "solid 1px  red"}} align={"middle"} >
        <Col>
          Logo here
          </Col>
        <Col flex={"auto"}>
        <Menu />
          </Col>
          <Col>
          sfffffffff
          </Col>
        </Row>
       

   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </>
  );
};

export default App;
