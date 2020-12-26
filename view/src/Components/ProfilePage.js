import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider"
import {auth} from "../firebase"
import { Link, navigate } from "@reach/router";


const ProfilePage = () => {
  const user = useContext(UserContext)
  const {photoURL, displayName, email} = user
  console.log(user)

  const signOutHandler = () => {
    auth.signOut();
    navigate('/')
  }

  return (
    <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
        <div
          style={{
            background:
                `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "100px",
            width: "100px"
          }}
          className="border border-blue-300"
        ></div>
        <div className = "md:pl-4">
        <h2 className = "text-2xl font-semibold">{displayName}</h2>
        <h3 className = "italic">{email}</h3>
        </div>
      </div>
      <button className = "w-full py-3 bg-red-600 mt-4 text-white hover:text-blue-600" onClick = {() => signOutHandler()}>Sign out</button>
      <button className = "w-full py-3 bg-green-600 mt-4 text-white"><Link to="/passwordreset" className="text-white-500 hover:text-blue-600">
            Change Password ?
          </Link></button>
    </div>
  ) 
};
export default ProfilePage;