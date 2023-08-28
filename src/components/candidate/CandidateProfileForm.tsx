import React, { useState, useEffect } from "react";
import { skills } from "../../util/Login/Skillsets";
import { Tag } from "antd";
import { Button, Form, Input, Select, Space, AutoComplete, Divider, Typography, Steps } from 'antd';
import type { SelectProps } from 'antd';
const { Text } = Typography;

const expertiseArr = [
    'Beginner', 'Intermediate', 'Advanced'
]
const skillsOptions: SelectProps['options'] = [];
for (let i = 0; i < skills.length; i++) {
    const value = skills[i];
    skillsOptions.push({
        label: value,
        value,
    });
}

const expertiseOptions: SelectProps['options'] = [];
for (let i = 0; i < expertiseArr.length; i++) {
    const value = expertiseArr[i];
    expertiseOptions.push({
        label: value,
        value,
    });
}
let arr = new Array(5).fill({}).map((_, i) => ({
    id: i, label: '',
    skill: '',
    expertise: ''
}));

interface FormProps {
    validateProfileForm: boolean,
    handleFormValidationStatus: Function
}
const CandidateProfileForm: React.FC<FormProps> = (props: FormProps) => {
    const [form] = Form.useForm();
    const { validateProfileForm} = props;
    useEffect(() => {
        // if(validateProfileForm === true){
        //     onFinish(form);
        // }
    }, [validateProfileForm])
    
   
    const [userSkillSet, setUserSkillSet] = useState(arr);
    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
        props.handleFormValidationStatus(true);
    };

    const handleSkillChange = (event: any, element: any, index: number, type: string) => {
        let valAtIndex = userSkillSet[index];
        if (type === 'skill') {
            valAtIndex['skill'] = event;
        } else if (type === 'expertise') {
            valAtIndex['expertise'] = event;
        }
        userSkillSet[index] = valAtIndex;
        setUserSkillSet(userSkillSet);
        // form.setFieldValue('skills', )
        form.setFieldValue('skills', userSkillSet);
    }
    const renderSkillsFormItems = () => {
        const skillSetArray: JSX.Element[] = [];
        for (let i = 1; i <= 5; i++) {
            skillSetArray.push(<Select options={skillsOptions} key={i} />);
        }

        const arr1 = Array.from(Array(5), (_, index) => index);
        return (

            <div style={{ display: "flex", flexDirection: "column", width: "600px", height: "200px", rowGap: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <Text strong>Skills</Text>
                    <Text strong>Expertise</Text>
                </div>
                <Form.Item name="skillsItem">
                    <div style={{ display: "flex", flexDirection: "column", rowGap: "16px" }}>
                        {
                            arr1.map((item, index) => (
                                <div style={{ display: "flex", flexDirection: "row", columnGap: "16px", rowGap: "16px" }}>
                                    <Select options={skillsOptions} key={index}
                                        style={{ width: "100%" }}
                                        onChange={(event) => handleSkillChange(event, item, index, "skill")} />
                                    <Select options={expertiseOptions} key={Math.random()}
                                        style={{ width: "100%" }}
                                        onChange={(event) => handleSkillChange(event, item, index, "expertise")} />
                                </div>
                            ))
                        }
                    </div>
                </Form.Item>
            </div>
        )
    }

    const validateField = (rule: any, value: any, promise: any) => {
        var isValid = value.every((item: any) => item.skill !== '' && item.expertise !== '')
        if (isValid) {
            return Promise.resolve();
        } else {
            return Promise.reject('Please add 5 skills and relevant expertise');
        }
    }

    return (
        <>
            <div style={{ width: "100%", height: "calc(65vh)", border: "1px solid lightgray", padding: "10px", justifyContent: "center" }}>
                <Form
                    form={form}
                    layout='vertical'
                    //name="dynamic_form_complex"
                    onFinish={onFinish}
                    style={{ maxWidth: 600, display: "flex", flexDirection: "column", rowGap: "16px" }}
                >
                    <Form.Item name='designation' label='Designation' rules={[{
                        required: true, message: 'Designation can not be empty'
                    }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="skills" label="" rules={[{
                        required: true, message: 'Add upto 5 skills',
                        validator: validateField
                    }]} style={{ height: "230px" }}>
                        {
                            renderSkillsFormItems()
                        }
                    </Form.Item>
                    <Form.Item name='available_hours_per_week' label='Available hours per week' >
                        <Input name='available_hours_per_week' placeholder="Please enter no of hours you can dedicate per week" />
                    </Form.Item>
                    <Form.Item name='languages_known' label='Languages known'>
                        <Input name='languages_known' placeholder="Please enter languages you know" />
                    </Form.Item>
                    <Button htmlType="submit" type="primary" >Submit</Button>
                </Form>
            </div>
        </>
    )
}

export default CandidateProfileForm;