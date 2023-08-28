import React, { useState, createContext} from "react";

export const JobsContext = createContext<any>({});
export const JobsProvider = (props: any) => {
    const [selectedJobInfo, setSelectedJobInfo] = useState({});
    const [selectedJobFilters, setSelectedJobFilters] = useState({});
    const [selectedSkillFilter, setSelectedSkillFilter] =useState({});
    const [selectedSalaryFilter, setSelectedSalaryFilter] = useState({});
    const dispatchJobState = (type: any, newValues: any) => {
        switch(type){
            case "UPDATE_SELECTED_JOB_INFO":
                setSelectedJobInfo(newValues);
                return
            case "UPDATE_SELECTED_JOB_FILTERS":
                setSelectedJobFilters(newValues);
                return   
            case "UPDATE_SELECTED_SKILL_FILTER":
                setSelectedSkillFilter(newValues);     
                return;
            case "UPDATE_SELECTED_SALARY_FILTER":
                setSelectedSalaryFilter(newValues);
                return     
            default:
                return;   
        }
    }
    return <JobsContext.Provider value={{selectedJobInfo, selectedJobFilters, 
        dispatchJobState, selectedSkillFilter, selectedSalaryFilter}} {...props} />
}