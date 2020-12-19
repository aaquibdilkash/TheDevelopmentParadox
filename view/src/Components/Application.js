import React from 'react'
import { Router } from "@reach/router"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import ProfilePage from "./ProfilePage"
import PasswordReset from "./PasswordReset"

function Application() {
    const user = null;
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