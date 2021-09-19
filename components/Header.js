import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { route } from "next/dist/server/router";
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white">
         <div className="flex w-full p-6 items-center">
         <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          height={40} width={120} onClick={()=>{
              router.push("/");
          }} className="curson-pointer" alt="google"/>
          <form className="flex flex-grow border border-gray-200 px-6 py-3 ml-5 mr-5 rounded-full shadow-lg max-w-3xl items-center">
              <input type="text" 
              ref={searchInputRef} className="flex-grow w-full focus:outline-none" placeholder="Search" autoComplete='off'/>
              <XIcon className="sm:mr-3 h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-110" onClick={()=>(searchInputRef.current.value="")}/>
              <MicrophoneIcon className="mr-3 h-7 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 pl-4" />
              <SearchIcon className="h-8 text-blue-500 hidden sm:inline-flex"/>
              <button hidden type="submit" onClick={search}>Search</button>
          </form>
          <Avatar url="https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg" className="ml-auto"/>
         </div>
         <HeaderOptions />
        </header>
    )
}

export default Header
