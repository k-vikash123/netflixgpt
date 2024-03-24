import { useRef, useState } from "react"
import { bgImage } from "../utils/links"
import Header from "./Header"
import Verification from "../utils/verification";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
   
    const [signIn,setShowSign] = useState("Sign In");
    const [showName,setShowName] = useState(false);
    const [msg,setMsg] = useState(null);

    const dispatch = useDispatch();

    const name = useRef();
    const email = useRef();
    const pass = useRef();

    const signUP = () => {
        if(signIn==="Sign In"){
         setShowSign("Sign Up");
         setShowName(!showName);
        }
        else{
         setShowSign("Sign In");
         setShowName(!showName);
        }
    }

    const validateUser = () => {
        const msg = Verification(name?.current?.value,email?.current?.value,pass?.current.value);
        setMsg(msg);
        if(msg) return;
        if(signIn==="Sign Up"){
            createUserWithEmailAndPassword(auth,email?.current?.value,pass?.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name?.current?.value, 
                photoURL: "https://avatars.githubusercontent.com/u/152602659?v=4"
              }).then(() => {
                // Profile updated!
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(
                      addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                      })
                    );
    
              }).catch((error) => {
                setMsg(error);
              });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setMsg(errorCode+" "+errorMessage);
              // ..
            });
        }
        else if(signIn==="Sign In"){
            signInWithEmailAndPassword(auth,email?.current?.value,pass?.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMsg(errorCode+" "+ errorMessage)
            });
        }
    }

    return <div>
        <Header/>
        <img src={bgImage} alt="background" className="h-screen object-cover md:w-screen"></img>
        <div className="absolute left-14 top-32 md:left-[39%] md:top-[30%] p-10 px-18 rounded-md text-white bg-black bg-opacity-80">
            <p className="font-bold text-2xl mb-4">{signIn}</p>
            <div className="flex flex-col">
            {showName && <input type="text" ref={name} placeholder="Enter Name" className=" h-10 px-3 rounded-md bg-gray-700 my-2"></input>}
            <input type="email" ref={email} placeholder="Email Address" className=" h-10 px-3 rounded-md bg-gray-700 my-2"></input>
            <input type="password" ref={pass} placeholder="Password" className=" h-10 px-3 rounded-md bg-gray-700 my-2"></input>
            <p className="text-red-600">{msg}</p>
            <button className="bg-red-600 text-white text-center mt-4 mb-2 rounded-md h-10" onClick={validateUser}>{signIn}</button>
            </div>
            <p><span className="font-light text-gray-400">New to Netflix?</span><span className="cursor-pointer" onClick={signUP}>{signIn === "Sign In" ? " Sign up" : " Sign in"} now.</span></p>
        </div>
    </div>
}

export default Login;