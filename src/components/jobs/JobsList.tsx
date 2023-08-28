import React, { useState, useContext, useEffect } from "react";
import { JobCard, JobFilters } from ".";
import { styled } from "styled-components";
import sampleJsonData from "../../sample_data/MOCK_DATA (1).json";
import { JobsContext } from "../../context/JobsProvider";
import { Pagination, Typography } from "antd";
import type { PaginationProps } from 'antd';

const { Text } = Typography;
const JobsListDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    width: 80%;
    padding-top: 12px;
    height: calc(85vh);
    overflow: auto;
`

const PaginatedDivStyled = styled.div`
    
    text-align: center;
`

const JobsListStyled = styled.div`
    display: flex;
    flexDirection: column;
    row-gap: 12px;
`
const sampleData = [
    {
        id: 1,
        title: "React Developer for developing responsive websites",
        description: `Expert Bubble developer
        Responsibilities:
        -Develop and manage platform  to improve user interface
        -Display user data in repeating groups within the application
        -Integrate with payment gateway
        
        Skills Required:
        -Strong expertise in Bubble development
        -Familiarity with implementing repeating groups or dynamic tables for scalable data display
        -Attention to detail and excellent problem-solving skills
        -Strong portfolio with bubble experience`,
        salary: 30,
        skills: ['React', 'HTML', 'CSS', 'Javascript', 'ES6'],
        currency: 'dollars',
        currencySymbol: '$',
        estimatedHoursPerWeek: '30 hours',
        estimatedProjectDuration: '3-4 months',
        expertLevel: 'Basic',
        created_time: '29-01-2016'
    },
    {
        id: 2,
        title: "Angular developer",
        description: `Expert developer in 
        Responsibilities:
        -Develop and manage platform  to improve user interface
        -Display user data in repeating groups within the application
        -Integrate with payment gateway
        
        Skills Required:
        -Strong expertise in Bubble development
        -Familiarity with implementing repeating groups or dynamic tables for scalable data display
        -Attention to detail and excellent problem-solving skills
        -Strong portfolio with bubble experience`,
        salary: 30,
        skills: ['Angular', 'HTML', 'CSS', 'Javascript'],
        currency: 'dollars',
        currencySymbol: '$',
        estimatedHoursPerWeek: '30 hours',
        estimatedProjectDuration: '3-4 months',
        expertLevel: 'Basic',
        created_time: '29-01-2016'
    }
]

const jobFunctions = ['Frontend', 'Backend', 'Mobile', 'Fullstack']

const JobsList: React.FC = () => {
    const { selectedSkillFilter, selectedSalaryFilter } = useContext(JobsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);

    const [filteredData, setFilteredData] = useState(sampleJsonData.slice(0, 10));
    const [isFilterApplied, setIsFilterApplied] = useState(false);

    const datasetSize = isFilterApplied === true ? filteredData.length : sampleJsonData.length;
    useEffect(() => {
        if (selectedSkillFilter.length > 0 || selectedSalaryFilter > 1) {
            setIsFilterApplied(true);
        } else {
            if (selectedSkillFilter.length === 0 && selectedSalaryFilter === 1) {
                setIsFilterApplied(false);
                setFilteredData(sampleJsonData);
            } 
        }
        filterJobsDataBasedOnAppliedFilters();
    }, [selectedSkillFilter, selectedSalaryFilter])

    const filterJobsDataBasedOnAppliedFilters = () => {
        let filterData;
        if (selectedSalaryFilter > 1) {
            filterData = sampleJsonData.filter((jobData) => (
                selectedSalaryFilter < jobData.salary
            ))
            setFilteredData(filterData);
            if (selectedSkillFilter.length > 0) {
                let filterBySkill = filterData.filter((jobData: any) => (
                    selectedSkillFilter.some((item: any) => jobData.skills.includes(item))
                ))
                setFilteredData(filterBySkill);
            }
        } else if (selectedSkillFilter.length > 0) {
            let filterBySkill = sampleJsonData.filter((jobData) => (
                selectedSkillFilter.some((item: any) => jobData.skills.includes(item))
            ))
            setFilteredData(filterBySkill);
        } else if (selectedSalaryFilter > 0 && selectedSkillFilter.length === 0) {
            filterData = sampleJsonData.filter((jobData) => (
                selectedSalaryFilter < jobData.salary
            ))
            setFilteredData(filterData);
        }

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
        -Strong portfolio with bubble experience`
        let skills = job.skills.split(",")
        let job_function = renderJobFunction();
        let jobDetails = { ...job, description, skills, title, job_function }
        return (
            <JobCard key={Math.random()} {...jobDetails} />
        )
    }

    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current: number, pageSize: number) => {
        setPageSize(pageSize);
        setCurrentPage(current);
        setPageNumber(1);
    };

    const onPageChange: PaginationProps['onChange'] = (pageNumber) => {
        setPageNumber(pageNumber)
    };

    const renderJobCards = () => {
        const startingRecord = (pageNumber - 1) * pageSize;
        const endingRecord = (pageNumber) * pageSize;
        return (
            <JobsListDivStyled>
                <Text strong>Showing {pageSize} of {datasetSize} records</Text>
                {
                    filteredData.slice(startingRecord, endingRecord).map((job: any) => (
                        renderJobCard(job)
                    )
                    )
                }
            </JobsListDivStyled>
        )
    }
    return (
        <JobsListStyled style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
                <div style={{ width: "20%" }}>
                    <JobFilters />
                </div>
                {renderJobCards()}
            </div>
            <PaginatedDivStyled>
                <Pagination
                    showSizeChanger
                    pageSize={pageSize}
                    pageSizeOptions={[10, 25, 50]}
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={1}
                    current={pageNumber}
                    onChange={onPageChange}
                    total={sampleJsonData.length}
                />
            </PaginatedDivStyled>
        </JobsListStyled>
    )
}

export default JobsList;