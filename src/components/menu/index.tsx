import { useState } from 'react';
import { Menu as AntdMenu, Col, Row } from 'antd';
import { config } from './config';
import { Style } from './style';

const Menu = () => {
  return (
    <Style>
          <AntdMenu mode="horizontal" items={config} />
    </Style>
  );
};

export default Menu;
