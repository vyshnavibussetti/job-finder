import React, {useContext} from 'react';

import { UserContext } from "./../context/UserProvider";
import { OpportunitiesPage, EmployerJobPostingsPage, Login, 
    CandidateProfilePage, JobPostingPage } from '.';
const HomeScreen : React.FC = () => {
    const { isUserLoggedIn, loggedInUserRole, loggedInUserInfo } = useContext(UserContext);

    const renderHomeScreenContent = () => {
        if(isUserLoggedIn === false){
            return <Login/>
        } else if(isUserLoggedIn === true){
            if(loggedInUserRole === 'job-seeker'){
                if(loggedInUserInfo.status === 'active'){
                    return <OpportunitiesPage />
                } else {
                    return <CandidateProfilePage />
                }
            } else if(loggedInUserInfo === 'employer'){
                if(loggedInUserInfo.status === 'active'){
                    return <EmployerJobPostingsPage />
                } else {
                    return <JobPostingPage />
                }
            }
        }
        
    }
    return (
        <>{renderHomeScreenContent()}</>
    )
}
export default HomeScreen;