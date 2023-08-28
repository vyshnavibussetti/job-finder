import React, {useContext, useEffect} from 'react';
import { UserContext } from "./../context/UserProvider";
import { useNavigate } from 'react-router-dom';    
const HomeScreen : React.FC = () => {
   useEffect(() => {
    renderHomeScreenContent()
   },[])
    const { isUserLoggedIn, loggedInUserRole, loggedInUserInfo } = useContext(UserContext);
    const navigate = useNavigate();
    const renderHomeScreenContent = () => {
        if(isUserLoggedIn === false){
            navigate('/login')
        } else if(isUserLoggedIn === true){
            if(loggedInUserRole === 'job-seeker'){
                if(loggedInUserInfo.status === 'active'){
                    navigate('/candidate/opportunities')
                } else {
                    navigate('/candidate/profile')
                }
            } else if(loggedInUserRole === 'employer'){
                if(loggedInUserInfo.status === 'active'){
                    navigate('/employer/my-job-postings')
                } else {
                    navigate('/employer/post-job')
                }
            }
        }
    }
    return (
        <>HomeScreen</>
    )
}
export default HomeScreen;