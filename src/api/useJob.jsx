import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';


const useJob = () => {
    const axiosSecure =useAxiosSecure()
    console.log(axiosSecure)
    const jobAddByPromise =email=>{
        console.log(email)
       return axiosSecure.get(`/jobs/applications?email=${email}`).then(res=>res.data)
    }
    return {jobAddByPromise};
};

// const MyApplicationjob = () => {
//     const axiosSecure =useAxiosSecure()

//     const MyApplication =email=>{
//         return axiosSecure.get(`applications?email=${email}`).then(res=>res.data)
//     }
//     return {
//         MyApplication
//     };
// };

export default useJob;