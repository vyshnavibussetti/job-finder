import React, {useEffect, useState} from "react";
import { Typography } from "antd";
import styled from "styled-components";
import { getEmployerJobPostings } from "../../sample_data/sampleJobPostings";
import { JobCard } from "../jobs";
const { Text } = Typography;

const PostedJobsListDivStyled = styled.div`
    width: 95%;
    justify-content: center;
    flex-direction: column;
    align-self: center;
    border: 1px solid lightgray;
    border-radius: 4px;
    height: 850px;
    vertical-align: middle;
    background: white;
    padding: 16px;
`
const jobFunctions = ['Frontend', 'Backend', 'Mobile', 'Fullstack']

const PostedJobsList: React.FC = () => {
    const [jobsPostedData, setJobsPostedData ] = useState([]);

    useEffect(() => {
        fetchPostedJobsInfo();
    }, [])

    const fetchPostedJobsInfo = () => {
        const result = getEmployerJobPostings();

        setJobsPostedData(result);
    }
    const renderJobFunction = () => {
        const random = Math.floor(Math.random() * jobFunctions.length);
        return jobFunctions[random]
    }
    const renderJobCard = (job: any) => {
        const title = `${job.expertLevel} developer in ${job.skills}`
        const description = `${job.expertLevel} developer in ${job.skills}
                Responsibilities:
                -Develop and manage platform  to improve user interface
                -Display user data in repeating groups within the application
                -Integrate with payment gateway
                
                Skills Required:
                -Strong expertise in Bubble development
                -Familiarity with implementing repeating groups or dynamic tables for scalable data display
                -Attention to detail and excellent problem-solving skills
                -Strong portfolio with bubble experience`;
        let skills = job.skills.split(",");
        let job_function = renderJobFunction();
        let jobDetails = { ...job, description, skills, title, job_function }
        return (
            <JobCard key={Math.random()} {...jobDetails} type='employer_posted_job_item' />
        )
    }
    return (
        <PostedJobsListDivStyled>
            <Text strong style={{ fontSize: "18px" }}>Manage Jobs</Text>

            {
                    jobsPostedData.map((job: any) => (
                        renderJobCard(job)
                    )
                    )
                }
        </PostedJobsListDivStyled>
    )
}

export default PostedJobsList;