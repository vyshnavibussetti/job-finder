import React from "react";
import { JobsProvider } from "../context/JobsProvider";
import { JobsList } from "."
const OpportunitiesPage = () => {
    return (
        <JobsProvider>
            <JobsList/>
        </JobsProvider>
    )
}

export default OpportunitiesPage;