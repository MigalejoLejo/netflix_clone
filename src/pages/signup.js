// Imports ---------------------------------------------------------------//
import { useState, useEffect } from "react"

import NetflixLogo from "../../public/images/NetflixLogo.svg"
import Link from "next/link"
import { redirect } from "react-router-dom";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SelectUser from "./browse/selectUser";




//------------------------------------------------------------------------//



// COMPONENT 
// =========================================================================
function SignUp() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(true);

    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    const [user, setUser] = useState()


    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(user => {
            if (user) {
                console.log("user at login: ", user)
                setUser(user)
            } else {
                console.log("no user loged in at loginscreen")
            }
        })
        return subscriber
    }, [])

    useEffect(() => {
        debounce(emailValidation());
        // console.log('Email: ', email, isValidEmail);
    }, [email]);

    useEffect(() => {
        debounce(passwordValidation());
        // console.log('Password: ', password, isValidPassword);
    }, [password]);

    useEffect(() => {
        if (password === secondPassword & password != "") {

            setPasswordMatch(true)
        } else (setPasswordMatch(false))

    }, [password, secondPassword])

    const emailValidation = () => {
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email || emailRegex.test(email) === false) {
            setIsValidEmail(false);
            return false;
        }
        setIsValidEmail(true);
        return true;
    };

    const passwordValidation = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i;
        if (!password || passwordRegex.test(password) === false) {
            setIsValidPassword(false)
            return false
        }
        setIsValidPassword(true)
        return true
    }

    const registerUser = () => {
        console.log("mail is valid?: ", isValidEmail)
        console.log("password is valid?: ", isValidPassword)
        console.log("password match?: ", passwordMatch)

        if (isValidEmail && isValidPassword && passwordMatch) {

            createUserWithEmailAndPassword(auth, email, password)
                .then(() => { console.log('User account created & signed in!') })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        return error;
                    }
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        return error;
                    }
                    console.error(error);
                });
        }
        if (!passwordMatch) {
            console.log("WARNING! - PASSWORD DOES NOT MATCH")

        }
        if (!isValidEmail) {
            console.log("WARNING! - INVALID EMAIL")
        }
        if (!isValidPassword) {
            console.log("WARNING! - INVALID PASSWORD")
        }
    }

    // Utility FN · Mover a carpeta utils/utils.js
    const debounce = fn => {
        let id = null;

        return (...args) => {
            if (id) {
                clearTimeout(id);
            }
            id = setTimeout(() => {
                fn(...args);
                id = null;
            }, 300);
        };
    };



    // RETURN 
    // =========================================================================
    return (
        <div>
            {!user ?

                <div className={`flex flex-col bg-black h-screen justify-center items-center`}>

                    {/* Netflix Logo */}
                    {/* ----------------------------------------------------------- */}
                    <div className={`flex flex-col  h-1/3  justify-end pb-10 items-center`} >
                        <NetflixLogo />
                        <p className={`text-red-600 text-lg`}
                        >- clone -</p>
                    </div>

                    {/* Input fields*/}
                    {/* ----------------------------------------------------------- */}
                    <div className={`flex flex-col gap-2 h-2/3 `} >

                        {/* Email field*/}
                        {/* --------------------------------------------------------- */}

                        <input
                            type="email"
                            className={`rounded-md px-3 w-80 h-10`}
                            value={email}
                            onInput={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />


                        {/* Password fields*/}
                        {/* --------------------------------------------------------- */}
                        <input
                            type="password"
                            className={`rounded-md px-3 w-80 h-10`}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />

                        <input
                            type="password"
                            className={`rounded-md px-3 w-80 h-10`}
                            placeholder="Repeat Password"
                            value={secondPassword}
                            onChange={(e) => (setSecondPassword(e.target.value))}

                        />


                        {/* Buttons */}
                        {/* ----------------------------------------------------------- */}
                        <button
                            className={`rounded-md bg-red-600 mt-5 items-center justify-center px-3 w-80 h-10`}
                            title="Log In"
                            onClick={() => registerUser()}>
                            <p className={`text-white text-xl`}>Sign Up!</p>
                        </button>

                        <div className={`flex flex-col gap-3 mt-8 w-full items-center`}>
                            <Link
                                href={"./"}
                                onClick={() => (console.log("Hello world"))}>
                                <div className={`flex flex-row gap-2 mt-10 w-full`}>
                                    <p className={`text-white text-lg`}>Do you already have an account?</p>
                                    <p className={`text-red-500 text-lg `}>Log in!</p>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                :
                <SelectUser />
            }
        </div>
    )
}

export default SignUp