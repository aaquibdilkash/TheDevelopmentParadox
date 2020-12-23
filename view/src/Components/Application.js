import React, { useContext } from 'react'
import { Router } from "@reach/router"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import ProfilePage from "./ProfilePage"
import PasswordReset from "./PasswordReset"
import {UserContext} from "../providers/UserProvider"
import StripePayment from './StripePayment'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'

function Application() {
    const user = useContext(UserContext);
    return (
        user ?
            <Router>
                <ProfilePage path="/profilepage" />
                <StripePayment path="payment" />
                <ContactUs path="contactus" />
                <AboutUs path="aboutus" />
                <PasswordReset path="passwordreset" />

            </Router>
            :
            <Router>
                <SignUp path="signup" />
                <SignIn path="/" />
                <PasswordReset path="passwordreset" />
                <StripePayment path="payment" />
                <ContactUs path="contactus" />
                <AboutUs path="aboutus" />
            </Router>
    )
}

export default Application;