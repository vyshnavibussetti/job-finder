import React from 'react';
import { LoginCard } from "./../components/login";
import styled from 'styled-components';

const LoginDivStyled = styled.div`
  min-height:calc(100vh-65px) !important;
  height: 900px !important ;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin: 10px;

`
const Login: React.FC = () => {
    return (
        <LoginDivStyled>
            <LoginCard />
        </LoginDivStyled>
    )
}

export default Login;