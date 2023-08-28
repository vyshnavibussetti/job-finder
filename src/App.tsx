
import React from 'react';
import AppHeader from './components/header/AppHeader';
import { Routes, Route } from "react-router-dom";
import { ConfigProvider, Layout } from 'antd';
import styled from 'styled-components';
import RoutesConfig from "./routes/RoutesConfig";
import CustomTheme from './theme';
import "antd/dist/antd.min.js";
import './App.css';
const { Footer } = Layout;

const LayoutStyled = styled(Layout)`
  position:absolute; 
  top: 40px;
  bottom:20px;
  left:0px;
  right:0px;
  overflow:auto;
`

const FooterStyled =  styled(Footer)`
  position:absolute; 
  bottom:0px; 
  height:20px; 
  left:0px; 
  right:0px; 
  overflow:hidden;
  background-color: lightgray;
`
const App = () => {
  return (
    <div style={{background: "#F6F7F9"}}>
      <ConfigProvider
        theme={CustomTheme}
      >
        <AppHeader />
        <LayoutStyled>
          <Routes>
            {
              RoutesConfig.map((route: any) => {
                return <Route key={route} path={route.path} element={React.createElement(route.component)} />
              })
            }
          </Routes>
         </LayoutStyled>
      </ConfigProvider>
      <FooterStyled>
        © Copyrights reserved
      </FooterStyled>
    </div>
  );
}

export default App;
