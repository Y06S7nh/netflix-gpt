import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Util/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Util/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Util/userSlice";

const Login = () => {
    const [isSignInForm, setISignInForm]= useState(true);
    const [errorMessage, setErrorMessage]= useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const Name =useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        
        console.log(email.current.value);
        console.log(password.current.value);

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        //Sign in Sign up Logic

        if(!isSignInForm){
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: Name.current.value, photoURL: "https://avatars.fastly.steamstatic.com/2137353e8e5bc7faa85899b61e467cc8d2cb5ac9_full.jpg"
              }).then(() => {
                          const {uid, email, displayName, photoUR} = auth.currentUser;
                          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoUR: photoUR}));
                 
                navigate("/browse")
              }).catch((error) => {
                setErrorMessage(error.message);

              });

            

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-" +errorMessage);

  })


        }
        else{
            //Sign In Logic
            
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-" +errorMessage);
  });


        }


    }


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
        <form onSubmit={(e) => e.preventDefault() } 
              className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign up"}</h1>


            {!isSignInForm &&<input 
            ref={Name}
            type="text" 
            placeholder="Full Name" 
            className="p-4 my-4 w-full bg-gray-700" />}

            <input 
            ref={email}
            type="text" 
            placeholder="Email Address" 
            className="p-4 my-4 w-full bg-gray-700" />

            <input
            ref={password}
            type="password" 
            placeholder="Password" 
            className="p-4 my-4 w-full bg-gray-700" />

            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sigh Up Now" : "Already Registered? Sign In now"} </p>
        </form>
    </div>

  );
};

export default Login;
