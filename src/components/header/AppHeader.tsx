import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import JobSearch from './../../assets/job-search-svgrepo-com.svg';
const { Text } = Typography;
const HeaderStyled = styled.div`
   // background-color: #1677ff;
    height: 40px;
   // width: 100%;
    top: 0px;
    line-height: 2.5;
    vertical-align: middle;
    padding: 4px 16px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position:absolute; top:0px; left:0px; right:0px;overflow:hidden;
`

const AppNameStyled = styled(Text)`
    font-weight: 600;
`
const AppHeader = () => {
    return (
        <HeaderStyled>  
          <img src={JobSearch} alt="Job Finder" width={24}/>
          <AppNameStyled>Job Finder</AppNameStyled>
        </HeaderStyled>
    )
}

export default AppHeader;