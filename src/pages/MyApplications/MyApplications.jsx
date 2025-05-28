import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { MyApplication } from '../../api/application';




const MyApplications = () => {
    const {user}=useAuth()
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense>
                <ApplicationList
                MyApplication={MyApplication(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;