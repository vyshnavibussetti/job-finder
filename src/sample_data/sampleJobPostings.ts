let sampleJobPostings: any = [

    {
        "id": 1,
        "company_name": "Johns LLC",
        "created_date": "7/19/2023",
        "skills": "iOS,Node,Flutter,Java,PHP",
        "salary": 66,
        "estimatedHoursPerWeek": 22,
        "estimatedProjectDuration": 3,
        "expertLevel": "Intermediate",
        "responsibilities": "Performs complex design and development for SAP PI/PO, BODS, SLT, and/or SDI interfaces.  Accountable for Quality Assurance of code/technical design reviews for vendor partner. ",
        "description": "Full stack developer with expertise in Java and React",
        "no_of_applicants": 124
    },
    {
        "id": 2,
        "company_name": "Gorczany, Lubowitz and Ebert",
        "created_date": "3/2/2023",
        "skills": "iOS,React,AWS,.net",
        "salary": 70,
        "estimatedHoursPerWeek": 17,
        "estimatedProjectDuration": 12,
        "expertLevel": "Advanced",
        "responsibilities": "Performs complex design and development for SAP PI/PO, BODS, SLT, and/or SDI interfaces.  Accountable for Quality Assurance of code/technical design reviews for vendor partner. ",
        "description": "Full stack developer with expertise in Java and React",
        "no_of_applicants": 2
    },
    {
        "id": 3,
        "company_name": "Reichel, Stoltenberg and Stamm",
        "created_date": "6/7/2023",
        "skills": "Hadoop,jQuery",
        "salary": 51,
        "estimatedHoursPerWeek": 23,
        "estimatedProjectDuration": 24,
        "expertLevel": "Advanced",
        "responsibilities": "Performs complex design and development for SAP PI/PO, BODS, SLT, and/or SDI interfaces.  Accountable for Quality Assurance of code/technical design reviews for vendor partner. ",
        "description": "Full stack developer with expertise in Java and React",
        "no_of_applicants": 146
    }
];

const getEmployerJobPostings = () => {
    return sampleJobPostings;
}
export { sampleJobPostings, getEmployerJobPostings };