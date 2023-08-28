import React from "react";
import { Form, Upload, Input, Button, message  } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
const { Item } = Form;
const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
const JobPostingForm: React.FC = () => {
    return (
        <>
            <Form
                layout='vertical'
            >
                <Item label='Upload requirement document'>
                <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
                </Item>
                <Item>
                    <Input defaultValue='abc' />
                </Item>
            </Form>
        </>
    )
}

export default JobPostingForm;