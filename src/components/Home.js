
import {bgImage, logo, supportedLang} from "../utils/links"
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lang from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLan } from "../utils/langSlice";

const Home = () => {
    const navigate = useNavigate();
    const emailid = useRef();
    const [showMsg,setShowmsg] = useState(null);
    const dispatch = useDispatch();
    const language = useSelector((store) => store.configLan.lang);

    const verified = () => {
        const emCheck = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailid.current.value);
        if(!emCheck){
          setShowmsg(true);
        }
        else {
            setShowmsg(false)
            navigate("/login")
        }
    }

    const langChange = (e) => {
        dispatch(changeLan(e.target.value));
    }

    return <div >
        <div className="absolute w-[100%] bg-gradient-to-b from-black">
        <img src={logo} alt="logo" className="w-52 h-24 ml-20 mt-5 self-center"></img>
    </div> 
        <div className="absolute md:left-[73%] md:top-14 top-28 left-14">
            <select className="h-8 w-28 outline-none rounded-md border border-gray-400 text-lg mx-4 px-1" onChange={langChange}>
                {supportedLang.map((lan) => <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>)}
            </select>
            <Link to="/login"><button className="text-white h-8 w-24 bg-red-600 rounded-md mx-2 text-lg px-2">Sign In</button></Link>
        </div>
        <div className="absolute md:top-[40%] md:left-[19%] top-36 rounded-md md:p-20 text-white md:bg-black bg-opacity-70">
            <span className="text-center hidden md:block text-7xl font-extrabold">{lang[language].line1},</span>
            <span className="text-center hidden md:block text-7xl font-extrabold my-2">{lang[language].line2}</span>
            <p className="my-4 font-bold hidden md:block text-2xl text-center">{lang[language].line3}</p>
            <p className="mt-6 mb-3 hidden md:block text-lg text-center">{lang[language].line4}</p>
            <div className="md:px-12 mt-32 md:mt-0">
            <input type="email" ref={emailid} placeholder={lang[language].placeHold} className="w-80 md:mx-2 h-12 px-2 ml-10 rounded-md border border-gray-400 outline-none font-bold text-black"></input>
            <button className="my-1 relative top-1 md:w-48 w-[9rem] md:left-0 h-12 left-24 px-2 text-lg rounded-md bg-red-500 font-bold md:text-2xl mx-1" onClick={verified}>{lang[language].getOn} <span>&#62;</span></button>
            {showMsg && <h1 className="my-2 text-red-500">Email is not Verified.</h1>}
            </div>
        </div>
        <img src={bgImage} alt="background" className="h-screen object-cover w-screen fixed md:fixed -z-10"></img>
    </div>
}

export default Home;