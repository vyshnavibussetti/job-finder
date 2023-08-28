import React from "react";
import { EmployerPostedJobsList } from "./../components/job-posting";
import styled from "styled-components";

const EmployerJobPostingDivStyled = styled.div`
    height: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
`
const EmployerJobPostingsPage: React.FC = () => {
    return (
        <EmployerJobPostingDivStyled>
            <EmployerPostedJobsList />
        </EmployerJobPostingDivStyled>
    )
}

export default EmployerJobPostingsPage;