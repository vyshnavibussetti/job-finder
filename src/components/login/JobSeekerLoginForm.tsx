import React, { useContext } from 'react';
import styled from 'styled-components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { SampleCandidateInfo } from '../../sample_data/UserInfo';
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
const JobSeekerLoginForm: React.FC = () => {
  const navigate = useNavigate()
  const { dispatchUserInfoState } = useContext(UserContext);
  const [form] = Form.useForm();
  const onFinish = (formValues: any) => {
    
    let { email, password } = formValues;
    let loggedInUserInfo = SampleCandidateInfo.find((ele: any) => {
       return ele.email === email && ele.password === password
    });
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

  const validateField = (rule: any, value: any, promise: any) => {
    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let fieldValue = regex.test(value);
    if (value.length >= 8) {
      if (!value) {
        return Promise.reject('Password should contain atleast 1 uppercase, 1 lowercase, 1 special and 1 alphanumeric characters');
      } else {
        return Promise.resolve();
      }
    }
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ width: "90%" }}
      layout='vertical'
      form={form}
    >
      <Item
        name={['email']}
        required
        label="Email"
        rules={[
          { type: 'email' },
        ]}
      >
        <InputStyled prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Please input your email address!" />
      </Item>
      <Item
        name="password"
        required
        label="Password"
        rules={[
          { required: true, message: 'Please input your Password!' },
          { min: 8, message: 'Password must contain minimum 8 characters.' },
          {
            validator: validateField
          }
        ]}
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

export default JobSeekerLoginForm;