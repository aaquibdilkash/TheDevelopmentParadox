import { navigate } from "@reach/router"
import React, {useContext, useState} from "react"
import { firestore } from "../firebase"
import { UserContext } from "../providers/UserProvider"


const ContactUs = () => {
    const user = useContext(UserContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    

    const createFeedbackHandler = async (event, name, email, message) => {
        event.preventDefault()
        if(!user) {
            setError("Please Sign In first before submitting feedback!")
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 4000)
            }).then(()=> {
                navigate('/signin')
            })
        }
        if(name===''||email===''||message==='') {
            setError("Please fill the given fields!")
            setTimeout(()=> {
                setError(null)
            }, 3000)
        } else {                    
            firestore.collection(`feedback`)
                .add({
                    name: name,
                    email: email,
                    message: message,
                    time : new Date()
                }).then(() => {
                        setSuccessMessage("Your Concern has been submitted successfully...We'll get back to you soon...Have a nice day :)")
                        setTimeout(()=> {
                            setSuccessMessage(null)
                        }, 5000)
                    })
                    .catch(error => {
                            setError("Error Submiting Feedback!")
                            setTimeout(()=> {
                                setError(null)
                            }, 3000)
                    }) 
        }
        setName("")
        setEmail("")
        setMessage("")
    }


    const onChangeHandler = event => {
        const {name, value} = event.currentTarget;

        
        if (name === "userEmail") {
            setEmail(value)
        } else if ( name === "userName") {
            setName(value)
        } else if (name === "userMessage") {
            setMessage(value)
        }
    }
        return (
            <section class="text-gray-700 body-font relative">
                <div class="container px-5 py-auto mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
        <div className="py-0 w-full text-black text-center mb-3">
        We appreciate you writing to us...Please leave any query suggestion or feedback...
          </div>
                    {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        {successMessage !== null && (
          <div className="py-4 bg-green-600 w-full text-white text-center mb-3">
            {successMessage}
          </div>
        )}
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Your Name" 
                            name="userName"
                            value={name}
                            onChange={event => onChangeHandler(event)}
                            />
                        </div>
                        </div>
                        <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Your Email"
                            name="userEmail" 
                            value={email}
                            onChange={event => onChangeHandler(event)}
                            />
                        </div>
                        </div>
                        <div class="p-2 w-full">
                        <div class="relative">
                            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            placeholder="Your query, suggestion or feedback"
                            name="userMessage"
                            value={message}
                            onChange={event => onChangeHandler(event)}

                            ></textarea>
                        </div>
                        </div>
                        <div class="p-2 w-full">
                        <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        onClick={ event => {
                            createFeedbackHandler(event, name, email, message)
                        }}
                        >Submit</button>
                        </div>
                        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                        <a class="text-indigo-500">professorparadox@gmail.com</a>
                        <p class="leading-normal my-5">49 Smith St.
                            <br />Saint Cloud, MN 56301
                        </p>
                        <span class="inline-flex">
                            <a class="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                            </a>
                            <a class="ml-4 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                            </a>
                            <a class="ml-4 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                            </a>
                            <a class="ml-4 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            </a>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
</section>
        )
    }



export default ContactUs