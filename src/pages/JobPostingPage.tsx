import React from "react";
import styled from "styled-components";
import { JobPostingForm } from "../components/job-posting";
const JobPostingPageDiv = styled.div`
    height: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
`
const JobPostingPage: React.FC = () => {
    return (
        <JobPostingPageDiv>        
            <JobPostingForm/>
        </JobPostingPageDiv>
    )
}

export default JobPostingPage;