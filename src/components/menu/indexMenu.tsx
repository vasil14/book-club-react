import { useState } from "react";
import { Menu as AntdMenu, Col, Row } from "antd";
import { configMenu } from "./configMenu";
import { StyleMenu } from "./styleMenu";
import { StyledContainer } from "../styledContent";
import Account from "../Account";
import Sidebar from "../Sidebar";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen((prevState) => !prevState )
  }

  return (
    <StyledContainer border={'solid 1px grey'}>
      <Row
        gutter={[8, 8]}
        style={{ maxWidth: "1440px", margin: "auto", padding: "0 40px" }}
        align={"middle"}
      >
        <Col>
          <img
            src="/bookclub-logo.png"
            alt="bookclub_logo"
            style={{ height: "50px" }}
          />
        </Col>
        <Col flex={"auto"}>
          <StyleMenu>
            <AntdMenu mode="horizontal" items={configMenu} inlineIndent={10} />
          </StyleMenu>
        </Col>
        <Col>
          <Account toggleSidebar={toggleSidebar}/>
        </Col>
      </Row>
      <Sidebar toggleSidebar={toggleSidebar} open={open}/>
    </StyledContainer>
  );
};

export default Menu;
