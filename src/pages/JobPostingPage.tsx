import React from "react";
import styled from "styled-components";
import { JobPostingForm } from "../components/job-posting";
const JobPostingPageDiv = styled.div`
    display: flex;
    width: 100%;
    height: 800px;
`
const JobPostingPage: React.FC = () => {
    return (
        <JobPostingPageDiv>
            
            <JobPostingForm/>
        </JobPostingPageDiv>
    )
}

export default JobPostingPage;