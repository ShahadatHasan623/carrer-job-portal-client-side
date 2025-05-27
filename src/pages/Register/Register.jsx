import Lottie from "lottie-react";
import React, { use } from "react";
import lottieAnimation from "../../../public/lottie/Animation - 1748260187265.json"
import { AuthContext } from "../../contexts/AuthContext";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {

  const {CreateRegister}=use(AuthContext)
  const handleRegister =e=>{
    e.preventDefault()
    const form =e.target;
    const email =form.email.value;
    const password =form.password.value;
    CreateRegister(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .then(error=>{
      console.log(error.message)
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
            <Lottie style={{width:"200px"}} animationData={lottieAnimation} loop={true} ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">Register</button>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
