import { Login, JobDetails, OpportunitiesPage, CandidateProfilePage, 
    EmployerJobPostingsPage, JobPostingPage, HomeScreen,
    NotFoundPage, UnauthorisedPage
} from "./../pages"

const RoutesConfig = [
    {
        path: '/home',
        component: HomeScreen,
        allowed_user_roles: ['job-seeker', 'employer']
    },
    {
        path: '/',
        component: HomeScreen,
        allowed_user_roles: ['job-seeker', 'employer']
    },
    {
        path: '/login',
        component: Login,
        allowed_user_roles: ['job-seeker', 'employer']
    },
    {
        path: '/candidate/opportunities',
        component: OpportunitiesPage,
        allowed_user_roles: ['job-seeker']
    },
    {
        path: '/candidate/profile',
        component: CandidateProfilePage,
        allowed_user_roles: ['job-seeker']
    },
    {
        path: '/employer/my-job-postings',
        component: EmployerJobPostingsPage,
        allowed_user_roles: ['employer']
    },
    {
        path: '/employer/post-job',
        component: JobPostingPage,
        allowed_user_roles: ['employer']
    },
    {
        path: '*',
        component: NotFoundPage,
        allowed_user_roles: ['employer', 'job-seeker']
    }
]

export default RoutesConfig;