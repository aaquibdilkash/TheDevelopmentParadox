import React, { useContext } from "react"
import { Link } from "@reach/router";
import {ToggleDarkMode} from "./ToggleDarkMode"
import {UserContext} from "../providers/UserProvider"


function Header() {
        const user = useContext(UserContext)
        return (
            <div className="header">
                <header class="text-gray-900 body-font font-black">
                <div class="container mx-0 flex flex-wrap p-1 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <button class="center inline-flex items-center bg-orange-200 border-0 py- px-2 focus:outline-none hover:bg-green-300 rounded text-base mt-0 md:mt-0"   ><ToggleDarkMode />
                    </button>
                        {/* <span class="ml-3 text-xl font-black">The Development Paradox</span> */}
                    </a>
                    <nav class="md:mr-auto md:ml-4 md:py-0 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <a class="mr-3 hover:text-gray-900"><Link to="/" className="text-black-500 hover:text-green-600">
            Home
          </Link></a>
                        <a class="mr-3 hover:text-gray-900"><Link to="/services" className="text-black-500 hover:text-green-600">
            Services
          </Link></a>
                        <a class="mr-3 hover:text-gray-900"><Link to="/contactus" className="text-black-500 hover:text-green-600">
            Contact Us
          </Link></a>
                        <a class="mr-3 hover:text-gray-900"><Link to="/aboutus" className="text-black-500 hover:text-green-600">
            About Us
          </Link></a>
                    {
                        user ?
                        <a class="mr-5 hover:text-gray-900"><Link to="/profilepage" className="text-black-500 hover:text-green-600">
            My Profile
          </Link></a> : <div></div>
                    }
                    {
                        !user ?
                        <a class="mr-5 hover:text-gray-900"><Link to="/signin" className="text-black-500 hover:text-green-600">
            Sign In
          </Link></a> : <div></div>
                    }
                    </nav>
                    <div class="mr-4">
                    {
                        user ?
                        <h3 class="inline-flex">Hey {user.displayName.split(" ")[0]}!</h3>
                        :
                        <h3></h3>
                    }
                    </div>
                    
                </div>
            </header>
            </div>
        )
}


export default Header