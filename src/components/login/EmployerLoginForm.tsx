import React, { useState } from 'react';
import styled from 'styled-components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

const { Item } = Form;

const ButtonStyled = styled(Button)`
    width: 100%;
    height: 48px;
`

const InputStyled = styled(Input)`
    height: 48px;
`
const EmployerLoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{width: "90%"}}
        layout='vertical'
      >
          <Item
          name={['user', 'email']} 
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