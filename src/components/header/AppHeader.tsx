import React from 'react';
import styled from 'styled-components';
import { Typography, Input, Menu } from 'antd';
import JobSearch from './../../assets/job-search-svgrepo-com.svg';
import type { MenuProps } from 'antd';
const { Search } = Input;
const { Text } = Typography;
const HeaderStyled = styled.div`
    height: 40px;
    top: 0px;
    line-height: 2.5;
    vertical-align: middle;
    padding: 4px 16px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:absolute; top:0px; left:0px; right:0px;
    overflow:hidden;
`

const HeaderContentRight = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    vertical-align: middle;
`

const LogoDivStyled = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 8px;
`

const AppNameStyled = styled(Text)`
    font-weight: 600;
`

const items: MenuProps['items'] = [
    {
        label: 'Profile',
        key: 'profile',
    },
    {
        label: 'Settings',
        key: 'settings',
    },
    {
        label: 'Sign out',
        key: 'signout',
    },

];
const AppHeader = () => {
    return (
        <HeaderStyled>
            <LogoDivStyled>
                <img src={JobSearch} alt="Job Finder" width={24} />
                <AppNameStyled>Job Finder</AppNameStyled>
            </LogoDivStyled>

            <HeaderContentRight>
                <Search
                    placeholder="Search contracts"
                    style={{ width: 250, height: '32px', borderRadius: "8px", marginTop: "6px" }}

                />
                <Menu mode="horizontal" items={items} />
            </HeaderContentRight>
        </HeaderStyled>
    )
}

export default AppHeader;