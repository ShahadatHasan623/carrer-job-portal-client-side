export const MyApplication =(email,accessToken)=>{
   return fetch(`https://carrer-code-server.vercel.app/applications?email=${email}`,{
      headers:{
         authorization:`Bearer ${accessToken}`
      }
   }).then(res=>res.json())
}