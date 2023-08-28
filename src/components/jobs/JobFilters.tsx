import React, {useContext, useState} from "react";
import { Typography, Select, Button, InputNumber, Form } from "antd";
import type { SelectProps } from 'antd';
import { styled } from "styled-components";
import { skills } from "../../util/Login/Skillsets";
import { JobsContext } from "../../context/JobsProvider";

const { Text } = Typography

const FilterDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    width: 100%;
    padding: 16px
`
const FilterCardStyled = styled.div`
    background: white;
    height: 200px;
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    row-gap: 32px;
`
interface filterConfigType {
    title: string;
    key: string;
    component: string;
}
const filtersConfig = [
    {
        title: "Filter by skill set",
        key: "skillset",
        component: 'select'
    },
    {
        title: "Filter by salary",
        key: "min_salary",
        component: 'inputnumber',
    }
]

const JobFilters: React.FC = () => {
    const { selectedJobInfo, dispatchJobState, selectedSkillFilter, selectedSalaryFilter } = useContext(JobsContext);
    const [selectedJobFilters, setSelectedJobFilters] = useState<{[key:string]: any}>({});
    const [form] = Form.useForm();
    const options: SelectProps['options'] = [];
    for (let i = 0; i < skills.length; i++) {
        const value = skills[i];
        options.push({
            label: value,
            value,
        });
    }
    const handleFilterChange = (value: string[], filterComponent: string) => {
        let jobFilter = selectedJobFilters;
        jobFilter["skillset"] = value;
        setSelectedJobFilters(jobFilter);
    }

    const onSalaryInputChange = (value: number | null) => {
        let jobFilter = selectedJobFilters;
        jobFilter["min_salary"] = Number(value); 
        setSelectedJobFilters(jobFilter);
    };

    const onHandleClick = (filter: any) => {

        if(filter.key === 'skillset' && selectedJobFilters["skillset"].length > 0){
            dispatchJobState("UPDATE_SELECTED_SKILL_FILTER",  selectedJobFilters["skillset"]);
        }

        if(filter.key === 'min_salary' && selectedJobFilters["min_salary"] > 0){
            dispatchJobState("UPDATE_SELECTED_SALARY_FILTER",  selectedJobFilters["min_salary"]);
        }
        
    };

    const onResetFilter = (filter: any) => {
        // if(filter.key === 'skillset'){
        //     let filter = selectedJobFilters["skillset"];
        //     filter["skillset"] = [];
        //     setSelectedJobFilters(filter);

        //     dispatchJobState("UPDATE_SELECTED_SKILL_FILTER",  []);
        // }

        // if(filter.key === 'min_salary'){
        //     let filter = selectedJobFilters["min_salary"];
        //     filter["min_salary"] = 1;
        //     setSelectedJobFilters(filter);
        //     dispatchJobState("UPDATE_SELECTED_SALARY_FILTER",  1);
        // }
    };

    const renderFilterComponent = (filter: any) => {
        switch (filter.component) {
            case 'select':
                return (
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select skills"
                        defaultValue={[]}
                        onChange={(value: string[]) => handleFilterChange(value, filter)}
                        options={options}
                    />
                )
            case 'inputnumber':
                return <InputNumber style={{ width: '100%' }} min={1} max={200} defaultValue={1}
                    onChange={onSalaryInputChange} />

        }

    }

    const renderFilterCard = (filter: filterConfigType) => {
        return (
                <FilterCardStyled>
                    <Text strong>{filter.title}</Text>
                    {renderFilterComponent(filter)}
                    <div style={{display: "flex", flexDirection: "row", columnGap: "6px"}}>
                    <Button type="primary" onClick={() => onHandleClick(filter)}>Apply</Button>
                    <Button htmlType="button" onClick={() => onResetFilter(filter)}>Reset</Button>
                    </div>
                </FilterCardStyled>
          
        )
    }
    return (
        <FilterDivStyled>
            
                {
                    filtersConfig.map((filter: any) => {
                        return (
                            renderFilterCard(filter)
                        )
                    })
                }
                
            
        </FilterDivStyled>
    )
}

export default JobFilters;