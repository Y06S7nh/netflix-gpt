import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setISignInForm]= useState(true)
const toggleSignInForm = () =>{
    setISignInForm(!isSignInForm);

}
  return (
    <div>
        <Header/>
        <div className="absolute">
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
        alt="logo"
        />
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign up"}</h1>


            {!isSignInForm &&<input 
            type="text" 
            placeholder="Full Name" 
            className="p-4 my-4 w-full bg-gray-700" />}

            <input 
            type="text" 
            placeholder="Email Address" 
            className="p-4 my-4 w-full bg-gray-700" />

            <input type="password" 
            placeholder="Password" 
            className="p-4 my-4 w-full bg-gray-700" />

            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sigh Up Now" : "Already Registered? Sign In now"} </p>
        </form>
    </div>

  );
};

export default Login;
