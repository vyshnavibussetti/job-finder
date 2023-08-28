const getGitHubProjects = async () => {
    const response = await fetch('https://api.github.com/users/vyshnavibussetti/repos');
    const { status } = response;
    
    if([401, 403].includes(status)){
        // redirect to login
    } 
    return response;
} 


export { getGitHubProjects };