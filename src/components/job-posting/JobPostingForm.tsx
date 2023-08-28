import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Select, Switch, Upload, Typography } from 'antd';
import type { SelectProps } from 'antd';
import { skills } from "../../util/Login/Skillsets";
import { styled } from 'styled-components';

const { TextArea } = Input;
const { Title } = Typography;
const skillsOptions: SelectProps['options'] = [];
for (let i = 0; i < skills.length; i++) {
  const value = skills[i];
  skillsOptions.push({
    label: value,
    value,
  });
}

const JobPostingFormStyled = styled(Form)`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  border: 1px solid lightgray;
  align-self: center;
  background: white;
  padding: 16px;
  
`

const JobPostingForm: React.FC = () => {
  const [form] = Form.useForm();
  const [fileUploadSize, setFileUploadSize] = useState(0)
  const normFile = (e: any) => {
    console.log(e);

   
    const { file } = e;
    setFileUploadSize(file.size);
    // if(file.size > 16000){
    //   return false;
    // }
    return e?.fileList;
  };

  const onFormFinish = (formValues: any) => {
    console.log("on form finsih")
    console.log(formValues);


  }

  const validateField = (rule: any, value: any, promise: any) => {
    let { size } = value[0];
    if(size > 16000){
      return Promise.reject('File size should be less than 16kb');
    } else {
      return Promise.resolve();
    }
  }
  return (
    <>
      <JobPostingFormStyled
        onFinish={onFormFinish}
        layout="vertical"
      //disabled={componentDisabled}
      >
        <Title level={4} style={{ textAlign: 'center' }}>Post a job</Title>
        <Form.Item label="Company Name"
          name='company_name' rules={[{ required: true, message: 'Please input company name!' }]}>
          <Input placeholder='Enter company name' />
        </Form.Item>
        <Form.Item label="Contact info of job poster"
          name='job_poster_name' rules={[{ required: true, message: 'Please input contact info!' }]}>
          <Input placeholder='Enter contact person name' />
        </Form.Item>
        <Form.Item name='skills' label='Required skillsets'
          rules={[{ required: true, message: 'Please select relevant skills!' }]}>
          <Select
            mode='multiple'
            options={skillsOptions}
            style={{ width: "100%" }}
            placeholder='Select required skills'
          />
        </Form.Item>

        <Form.Item label="Job Requirements" name='job_requirements'
          rules={[{ required: true, message: 'Please input job requirements!' }]}>
          <TextArea rows={8} placeholder='Enter job requirements' />
        </Form.Item>

        <Form.Item
          name="upload"
          label="Upload Job description"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ 
            required: true, message: 'File size should be less than 16kb, Please re-upload a new file!'},
            {validator: validateField  }]}
        >
          <Upload name="logo" action="/upload.do" >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="">
          <Button type='primary' htmlType='submit'>Post job</Button>
        </Form.Item>

      </JobPostingFormStyled>
    </>
  );
};

export default JobPostingForm;