import { Login, JobDetails, OpportunitiesPage, CandidateProfilePage, 
    EmployerJobPostingsPage, JobPostingPage, HomeScreen,
    NotFoundPage, UnauthorisedPage
} from "./../pages"

const RoutesConfig = [
    {
        path: '/home',
        component: HomeScreen
    },
    {
        path: '/',
        component: HomeScreen
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/candidate/opportunities',
        component: OpportunitiesPage
    },
    {
        path: '/candidate/profile',
        component: CandidateProfilePage,
    },
    {
        path: '/employer/job-postings',
        component: EmployerJobPostingsPage
    },
    {
        path: '/employer/post-job',
        component: JobPostingPage
    },
    {
        path: '*',
        component: NotFoundPage
    }
]

export default RoutesConfig;