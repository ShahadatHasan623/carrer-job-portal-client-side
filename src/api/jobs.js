export const jobAddByPromise =(email,accessToken)=>{
   return fetch(`https://carrer-code-server.vercel.app/jobs/applications?email=${email}`,{
      headers:{
         authorization:`Bearer ${accessToken}`
      }
   }).then(res=>res.json())
}