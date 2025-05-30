import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobLists from './JobLists';
import { jobAddByPromise } from '../../api/jobs';

const MyPostsJob = () => {
    const {user}=useAuth()
    return (
        <div>
            <Suspense>
                <JobLists jobAddByPromise={jobAddByPromise(user.email)}></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostsJob;