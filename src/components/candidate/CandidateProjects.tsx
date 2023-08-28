import React, { useState, useEffect } from "react";
import { getGitHubProjects } from "./../../api/GithubApi";
import ErrorModal from "../error_management/ErrorModal";
import { GitHubProjectCard } from ".";
const CandidateProjects: React.FC = () => {
    const [gitHubProjects, setGitHubProjects] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showErrorModal, setShowErrorModal ] = useState(false);
    useEffect(() => {
        fetchGithubProjects()
    }, [])

    const fetchGithubProjects = async () => {
        const response = await getGitHubProjects();
        const result = await response.json()
        if(response.status !== 200){
            setShowErrorModal(true)
        } else {
            setGitHubProjects(result);
            setIsLoaded(true);
        }
        
    }
   
    const closeErrorModal = () => {
        setShowErrorModal(false);
    }

    const renderGitHubProjectCards = () => {
        return (
            <>
            {
               gitHubProjects.map((project: any) => {
                return <GitHubProjectCard {...project} />
               }) 
            }
            
            </>
        )
    }
    return (
        <div>
            {
                isLoaded && renderGitHubProjectCards()
            }
            
            {
               showErrorModal &&  <ErrorModal closeErrorModal={closeErrorModal}/>
            }
        </div>
    )
}


export default CandidateProjects;