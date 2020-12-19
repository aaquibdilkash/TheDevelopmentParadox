import React, { useContext } from 'react'
import { Router } from "@reach/router"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import ProfilePage from "./ProfilePage"
import PasswordReset from "./PasswordReset"
import {UserContext} from "../providers/UserProvider"

function Application() {
    const user = useContext(UserContext);
    return (
        user ?
            <ProfilePage />
            :
            <Router>
                <SignUp path="signup" />
                <SignIn path="/" />
                <PasswordReset path="passwordreset" />
            </Router>
    )
}

export default Application;