import React, { useContext } from 'react'
import { Router } from "@reach/router"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import ProfilePage from "./ProfilePage"
import PasswordReset from "./PasswordReset"
import {UserContext} from "../providers/UserProvider"
import StripePayment from './StripePayment'
import Home from "./HomeComponent"
import Services from "./ServicesComponent"
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'

function Application() {
    const user = useContext(UserContext);
    return (
        user ?
            <Router>
                <ProfilePage path="/profilepage" />
                <PasswordReset path="passwordreset" />
                <StripePayment path="payment" />
                <Home path="/" />
                <Services path="services" />
                <ContactUs path="contactus" />
                <AboutUs path="aboutus" />

            </Router>
            :
            <Router>
                <SignUp path="signup" />
                <SignIn path="/signin" />
                <PasswordReset path="passwordreset" />
                <Home path="/" />
                <Services path="services" />
                <ContactUs path="contactus" />
                <AboutUs path="aboutus" />
            </Router>
    )
}

export default Application;