import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { SampleEmployerInfo } from '../../sample_data/UserInfo';
import { UserContext } from '../../context/UserProvider';
import { useNavigate } from 'react-router-dom';
const { Item } = Form;

const ButtonStyled = styled(Button)`
    width: 100%;
    height: 48px;
`

const InputStyled = styled(Input)`
    height: 48px;
`
const EmployerLoginForm: React.FC = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const { dispatchUserInfoState } = useContext(UserContext);
  const onEmployerLoginFinish = (formValues: any) => {
    let { email, password } = formValues;
    let loggedInUserInfo = SampleEmployerInfo.find((ele: any) => {
       return ele.email === email && ele.password === password
    })

    if(loggedInUserInfo){
      dispatchUserInfoState("UPDATE_USER_LOGGED_IN_STATUS", true);
      dispatchUserInfoState("UPDATE_LOGGED_IN_USER_INFO",loggedInUserInfo);
      dispatchUserInfoState("UPDATE_LOGGED_IN_USER_ROLE", loggedInUserInfo.role);
      navigate('/home');
    } else {
      alert("Please enter valid username and password");
      form.resetFields();
    }
  };


  return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onEmployerLoginFinish}
        style={{width: "90%"}}
        layout='vertical'
        form={form}
      >
          <Item
          name={'email'} 
          required
          label="Email" 
          rules={[{ type: 'email' }]}
        >
          <InputStyled prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Please input your work email address!" />
        </Item>
        <Item
          name="password"
          required
          label="Password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <InputStyled
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Please input your password!"
          />
        </Item>
      
        <Item>
          <ButtonStyled type="primary" htmlType="submit" className="login-form-button">
            Login
          </ButtonStyled>
          {/* Or <a href="">register now!</a> */}
        </Item>
        <Item>
          <ButtonStyled type="link">
            Don't have an account, Sign up now
          </ButtonStyled>
          {/* Or <a href="">register now!</a> */}
        </Item>
      </Form>
   
  )
}

export default EmployerLoginForm;