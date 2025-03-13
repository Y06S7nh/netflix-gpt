import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Util/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Util/userSlice";
import { LOGO } from "../Util/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user= useSelector(store=> store.user);

  const handleSignOut = () =>{
    signOut (auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });


  }

  
  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const {uid, email, displayName, photoUR} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoUR: photoUR}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsuscribe();

  }, []);
  

    return (
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">

        <img 
        
        className="w-44"
        src= {LOGO}
        alt="=logo"
        />
       {user && <div className="flex p-2">

          <img
          className="w-12 h-12 rounded-full"
           alt="usericon" src={"https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v2/feature/profile/38_jv.png" }/>
          <button onClick={handleSignOut}  className="font-bold text-blue-600">(Sign Out)</button>
        </div>
}
      </div>
    );
  };
  
  export default Header;
  