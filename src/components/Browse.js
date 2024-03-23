
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import BrowseTrailer from "./BrowseTrailer";
import Recommends from "./Recommends";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";


const Browse = () => {
    const select = useSelector((store) => store.user);
    const [showSearch,setShowSearch] = useState(false);
    const [itemShown,setItemShown] = useState("Search Movies");

    const moveOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
          });
    }

    const searching = () => {
        if(itemShown==="Search Movies"){
            setItemShown("Browse Movies");
            setShowSearch(!showSearch);
        }
        else{
            setItemShown("Search Movies");
            setShowSearch(!showSearch);
        }
    }

    return <div>
        <Header/>
        <div className="flex flex-row absolute top-10 left-[70%]">
            <button className="px-2 rounded-md mr-3 relative bottom-1 bg-purple-600 text-white" onClick={searching}>{itemShown}</button>
            <img src={select?.photoURL} alt="userPhoto" className="w-12 h-12 rounded-full relative bottom-2"></img>
            <p className="font-bold text-lg mx-1 text-white">{select?.displayName}</p>
            <button className="text-white text-lg w-24 h-8 bg-red-600 px-2 rounded-md mx-2"
            onClick={moveOut}
            >Sign Out</button>
        </div>
        {showSearch ? <Search/> :<> <BrowseTrailer/>
        <Recommends/>
        </>
        }
    </div>
}

export default Browse;