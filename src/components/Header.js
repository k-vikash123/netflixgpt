import { useEffect } from "react";
import {logo} from "../utils/links";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/login");
          }
        });
        return (() => unsubscribe());
      }, []);

    return (<div className="absolute w-[100%] bg-gradient-to-b from-black">
        <img src={logo} alt="logo" className="w-52 h-24 ml-20 mt-5 self-center"></img>
    </div> )
}  

export default Header;