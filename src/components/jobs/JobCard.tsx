import React, { useContext} from "react";
import { Card, Avatar, Typography, Button, Tag, Divider } from "antd";
import styled from "styled-components";
import { JobsContext } from "../../context/JobsProvider";
const { Meta } = Card;
const { Text, Title } = Typography;

const AvatarStyled = styled(Avatar)`
    background-color: #fde3cf;
    color: #f56a00;
    width: 50%;
`
const DescriptionStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 16px;
`
const JobDetailsDiv = styled.div`
    height: 250px;
    width: 98%;
    display: flex;
    flex-direction: row;
    border: 2px solid #EDEDED;
    border-radius: 3px;
    background-color: white;
    padding: 16px;
`

const LogoDivStyled = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    vertical-align: middle;
    align-self: center;
    padding-left: 16px;
`
const JobContentDivStyled = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    //margin: 16px;
    align-items:flex-start;
    vertical-align: flex-start;
    padding: 16px 8px;  
`

const JobActionsDivStyled = styled.div`
  display: flex;
  align-items: center;
  width: 20%
  vertical-align: middle;
  align-items: center; 
  align-self: center;
`
interface JobDetailProps {
    title?: string,
    salary: number,
    description: string,
    skills: string[],
    currency?: string,
    currencySymbol?: string,
    estimatedHoursPerWeek: string,
    estimatedProjectDuration: string,
    expertLevel: string;
    created_date: string;
    company_name: string;
    job_function?: string;
    [key:string]: any;
}

const JobCard: React.FC<JobDetailProps> = (props: JobDetailProps) => {
    const { selectedSkillFilter } = useContext(JobsContext);
    const { title, salary, description, skills, currencySymbol,
        estimatedHoursPerWeek, estimatedProjectDuration, 
        expertLevel, created_date, company_name, job_function, type } = props;
    const renderJobSubTitle = () => {
        const descriptionItems = [
            {

                label: 'Expertise',
                key: 'expertLevel',
                value: expertLevel
            },
            {

                label: 'Job Duration',
                key: 'estimatedProjectDuration',
                value: `${estimatedProjectDuration} weeks`
            },
            {
                label: 'Hours per week',
                key: 'estimatedHoursPerWeek',
                value: estimatedHoursPerWeek
            },
            {

                label: 'Budget',
                key: 'salary',
                value: `${salary} $`
            },
            {

                label: 'Posted on',
                key: 'created_time',
                value: created_date
            }
        ]
        return (
            <DescriptionStyled>
                {
                    descriptionItems.map((item: any) => {
                        return (
                            <span key={Math.random()}>
                                <Text strong={true} >{item.label}:</Text>
                                &nbsp;
                                <Text>{item.value}</Text>
                            </span>
                        )
                    })
                }
            </DescriptionStyled>

        )
    }

    const renderLogoDiv = () => {
        return (
            <LogoDivStyled>
                <AvatarStyled size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 80 }}>{company_name[0]}</AvatarStyled>
            </LogoDivStyled>
        )
    }

    const renderSkillsTags = () => {
        //let skillSet = skills.split(",")
        const renderColor = (skill: string) => {
            if(type === 'candidate_opportunity_item' && selectedSkillFilter.length >= 1){
                if(selectedSkillFilter.includes(skill)){
                    return "success";
                } else {
                    return "default"
                }
            } else {
                return "default"
            }
        }
        return (
            <div>
                {
                    skills.map((skill: string) => (
                        <Tag key={Math.random()} color={renderColor(skill)}>{skill}</Tag>
                    ))
                }

            </div>
        )
    }
    const renderJobContentDiv = () => {
        return (
            <JobContentDivStyled>
                <Title level={5}>{title}</Title>
                {
                    renderJobSubTitle()
                }
                <Text>{description.substring(0, 350)} ...</Text>
                {
                    renderSkillsTags()
                }
            </JobContentDivStyled>
        )
    }

    const renderJobActionsForCandidateOpportunity = () => {
        return (
            <JobActionsDivStyled>
                <Button type='primary' onClick={handleJobConsolidatedDetailsClick}>View</Button>
            </JobActionsDivStyled>
        )
    }

    const renderJobActionsForEmployers = () => {
        return (
            <JobActionsDivStyled>
                <Tag color='blue' style={{cursor: 'pointer'}}>{ props.no_of_applicants} Applicants </Tag>
            </JobActionsDivStyled>
        )
    }

    const handleViewApplicants = () => {
        
    }
    const renderJobActions = () => {
        if(type === 'candidate_opportunity_item'){
            return (
                <>
                    {renderJobActionsForCandidateOpportunity()}
                </>
            )
        } else {
            return (
                <>
                    {renderJobActionsForEmployers()}
                </>
            )
        }
    }

    const handleJobConsolidatedDetailsClick = () => {

    } 
    return (
        <JobDetailsDiv>
            {renderLogoDiv()}
            <Divider type="vertical" style={{ height: "100%",  }} />
            {renderJobContentDiv()}
            <Divider type="vertical" style={{ height: "100%" }} />
            {renderJobActions()}
        </JobDetailsDiv>
    )
}

export default JobCard;