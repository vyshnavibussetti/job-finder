import React, { useState } from 'react';
import styled from 'styled-components';
import { Tabs, Typography } from 'antd';
import { JobSeekerLoginForm, EmployerLoginForm } from '.';
import JobSearchIcon from './../../assets/job-search-svgrepo-com.svg';
const { Title } = Typography;
const LoginCardStyled = styled.div`
  width: 25%;
  height: 65%;
  padding: 24px;
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  // align-items: center;
  box-shadow: 0 0 15px 4px rgba(0,0,0,.06);
  row-gap: 8px;
`

const loginTabOptions = [
  {
    key: '1',
    label: 'Login as Freelancer',
  },
  {
    key: '2',
    label: 'Login as Employer',
  }
]
const LoginCard: React.FC = () => {
  const defaultActiveTab = "1"; // Setting default active tab to 1;

  const [activeTab, setActivetab] = useState("1");

  const handleTabChange = (tab: string) => {
      setActivetab(tab);
  }

  const renderActiveLoginForm = () => {
    if(activeTab === "1"){
      return <JobSeekerLoginForm />
    } else if(activeTab === "2"){
      return <EmployerLoginForm />
    }
  }

  return (
    <LoginCardStyled>
      <div style={{ width: "80%", display: "flex", flexDirection: "row", justifyContent: "center",  columnGap: "8px"}}>
        <img src={JobSearchIcon} alt="Job Finder" width={48} />
        <Title level={4}>Job Finder</Title>
      </div>
      <Tabs
        defaultActiveKey={defaultActiveTab}
        onChange={handleTabChange}
        items={loginTabOptions}
        tabBarStyle={{ width: '100%' }}
      />
      {/* <JobSeekerLoginForm />

      <EmployerLoginForm /> */}
      {renderActiveLoginForm()}
    </LoginCardStyled>
  )
}

export default LoginCard;