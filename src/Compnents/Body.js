import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Util/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Util/userSlice";

const Body = () => {
    const dispatch = useDispatch();


    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },

        {
            path: "/browse",
            element: <Browse/>
        }

    ])

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {

          const {uid, email, displayName, photoUR} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoUR: photoUR}));
        } else {
          dispatch(removeUser());
        }
      });



    }, [])

    return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
    );
  };
  
  export default Body;
  