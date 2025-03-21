import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import Singinlotte from "../../assets/lottie/login.json"
import AuthContext from '../../contaxt/AuthContaxt';
import SocialLogin from './SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignIn = () => {
    
    const {signInUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate =useNavigate()
    console.log(location,'singn in')
    const from = location.state || '/';


        const handleSignIn = e =>{
            e.preventDefault()
            const form = e.target
            const email = form.email.value
            const password = form.password.value
            console.log(email,password)

           signInUser(email,password)
           .then(result =>{
            console.log('sign in', result.user)
            toast.success("Sign-in Successfull!",{position:"top-right"})
            navigate(from)
           }) 
           .catch(error =>{
            console.log(error)
           })
        } 

  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left w-96">
      
      <Lottie animationData={Singinlotte }></Lottie>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className=" ml-8 mt-4 text-5xl font-bold">log In!</h1>
        < form  onSubmit={handleSignIn} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Log In</button>
          </fieldset>
        </form>
        <div className=" text-center ">
        <SocialLogin/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SignIn;
