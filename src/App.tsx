
import React from 'react';
import './App.css';
import AppHeader from './components/header/AppHeader';
import { Routes, Route } from "react-router-dom";
import { Login, JobDetails, OpportunitiesPage, CandidateProfilePage, EmployerPage, JobPostingPage } from "./pages"
import { ConfigProvider, Layout } from 'antd';
import styled from 'styled-components';
import "antd/dist/antd.min.js";

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
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#1677ff',
            borderRadius: 2,
            //colorFillSecondary: 'teal',
            // Alias Token
            colorBgContainer: '#fff',
            // colorBorderSecondary: "yellow",
             colorLinkActive: "#45D909",
            // colorSuccess: "black",
            // colorSuccessBg: "cyan"

          },
          "components": {
            "Tag": {
              colorInfo: "#1677ff",
              colorPrimaryHover: "rgb(49, 134, 237)"
            }
          }
        }}
      >

        <AppHeader />
        <LayoutStyled>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/candidate/opportunities" element={<OpportunitiesPage/>} />
            <Route path="/candidate/profile" element={<CandidateProfilePage />} />
            <Route path='/employer/job-postings' element={<EmployerPage/>} />
            <Route path="/employer/post-job" element={<JobPostingPage/>} />
            {/* <Route path="/job-info/:jobId" element={<JobDetails/>} /> */}
          </Routes>
         </LayoutStyled>
      </ConfigProvider>
      <FooterStyled>
        Copyrights reserved
      </FooterStyled>
    </div>
  );
}

export default App;
