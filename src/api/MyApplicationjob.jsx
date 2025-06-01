import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyApplicationjob = () => {
    const axiosSecure =useAxiosSecure()

    const MyApplication =email=>{
        return axiosSecure.get(`/applications?email=${email}`).then(res=>res.data)
    }
    return {
        MyApplication
    };
};

export default MyApplicationjob;