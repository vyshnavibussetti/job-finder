import React, { useState } from "react";
import { Typography } from 'antd';


import styled from "styled-components";
import { CandidateProfileCard } from "../components/candidate";
const { Text } = Typography;
const CandidateProfileDivStyled = styled.div`
  min-height:calc(100vh-65px) !important;
  height: 900px !important ;
  border: 1px solid white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin: 10px;

`
const expertiseArr = [
    'Beginner', 'Intermediate', 'Advanced'
]
const CandidateProfile: React.FC = () => {
   
    return (
        <CandidateProfileDivStyled>
          <CandidateProfileCard />
        </CandidateProfileDivStyled>
    )
}

export default CandidateProfile;