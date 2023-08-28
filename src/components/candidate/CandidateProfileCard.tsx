import React, { useState } from "react";
import { Typography, Collapse } from 'antd';
import styled from "styled-components";
import { CandidateProjects, CandidateProfileForm } from ".";
const { Text } = Typography;
const { Panel } = Collapse;
const CandidateProfileDivStyled = styled.div`
  min-height:calc(100vh-100px) !important;
  height: 900px !important ;
  border: 1px solid white;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin: 10px;
  padding:  16px;
  background: white;
`

const CandidateProfileCard: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [validateProfileForm, setValidateProfileForm] = useState(false);
    const [isFormValidated, setIsFormValidated] = useState(false);


    const handleFormValidationStatus = (formStatus: boolean) => {
        setIsFormValidated(formStatus);
    }

    const onCollapseChange = () => {

    }
    return (
        <CandidateProfileDivStyled>
            <Collapse defaultActiveKey={['1']} onChange={onCollapseChange} style={{ height: "800px", overflow: "auto", width: "80%" }}>
                <Panel header="Candidate Profile" key="1" showArrow>
                    <CandidateProfileForm
                        validateProfileForm={validateProfileForm}
                        handleFormValidationStatus={(formStatus: boolean) => handleFormValidationStatus(formStatus)} />
                </Panel>
                <Panel header="Candidate Projects" key="2" showArrow>
                    <CandidateProjects />
                </Panel>

            </Collapse>
        </CandidateProfileDivStyled>
    )
}

export default CandidateProfileCard;