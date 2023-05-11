// Imports ---------------------------------------------------------------//
import { useState, useEffect } from "react"

import NetflixLogo from "../../public/images/NetflixLogo.svg"
import Link from "next/link"
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import bg_login from "../../public/images/bg_login.png"



//------------------------------------------------------------------------//



// COMPONENT 
// =========================================================================
export function LogIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isValidPassword, setIsValidPassword] = useState(false)

    const [isPaswordVisible, setIsPaswortVisible] = useState(false)

    useEffect(() => {
        debounce(emailValidation())
        // console.log("email: ", email, isValidEmail)
    }, [email])

    useEffect(() => {
        debounce(passwordValidation())
        // console.log("password: ", password, isValidPassword)
    }, [password])

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email || regex.test(email) === false) {
            setIsValidEmail(false)
            return false
        } else {
            setIsValidEmail(true)
            return true
        }
    }

    const passwordValidation = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i;
        if (!password || passwordRegex.test(password) === false) {
            setIsValidPassword(false)
            return false
        }
        setIsValidPassword(true)
        return true
    }

    const LogInUser = () => {
        if (isValidEmail && isValidPassword) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    console.log('User signed in!');
                })
                .catch(error => {
                    if (error.code === "auth/user-not-found") {
                        // toast.show("WARNING! - Unknown Email - User not found", {
                        //     type: "warning",
                        //     placement: "top",
                        //     duration: 4000,
                        //     offset: 30,
                        //     animationType: "slide-in",
                        // });
                        console.log(error)
                        return error;
                    }
                });
        }
    }

    const debounce = (fn) => {
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
        <div className={`relative flex flex-col bg-black h-screen justify-center items-center z-20`}>

            {/* Background */}
            {/* ----------------------------------------------------------- */}
            <div className="absolute w-full h-full -z-10">
                <Image src={bg_login} fill={true} />
            </div>
            <div className="absolute w-full h-full -z-0 bg-black/50">
            </div>


            {/* Netflix Logo */}
            {/* ----------------------------------------------------------- */}
            <div className={`absolute z-20 top-0 left-0 p-5 flex flex-row gap-10 justify-start items-center`} >
                <NetflixLogo />
                <p className={`text-red-600 text-lg`}
                >- clone -</p>
            </div>



            {/* Content */}
            {/* ----------------------------------------------------------- */}
            <div className="flex flex-col bg-black/70  px-[60px] pt-[60px] pb-40 z-30">
                <h2 className="text-3xl text-white font-semibold mb-10">Sign In</h2>
                {/* Input fields*/}
                {/* ----------------------------------------------------------- */}
                <div className={`flex flex-col gap-2 w-[400px]`} >
                    {/* Email field*/}
                    {/* --------------------------------------------------------- */}
                    <label for="email" className="relative group w-full h-[50px] bg-zinc-700 overflow-hidden rounded-md">
                        <input
                            id="email"
                            type="email"
                            className={`rounded-sm border-b-2 ${isValidEmail || email === "" ? "" : "border-b-orange-400"} w-full h-full px-3 bg-zinc-700 pt-6 text-white justify-end`}
                            value={email}
                            onInput={(e) => setEmail(e.target.value)
                            } />
                        <label for="email"
                            className={`absolute left-0 mt-4 pl-3 w-full h-full text-md text-gray-300
                                   group-focus-within:text-sm group-focus-within:mt-0 ease transition-all ${email ? "text-sm mt-0" : ""} `} >
                            <span>Enter your email</span>
                        </label>
                    </label>
                    <label for="email"
                        className={`${ isValidEmail || email==="" ? "hidden" : " text-orange-400 text-xs"}`}>
                        Please enter a valid email address
                    </label>



                    {/* Password field*/}
                    {/* --------------------------------------------------------- */}
                    <label for="password" className="relative group w-full bg-zinc-700 h-[50px] overflow-hidden rounded-md mt-5">
                        <input
                            id="password"
                            type="password"
                            className={`rounded-sm border-b-2 ${isValidPassword || password === "" ? "" : "border-b-orange-400"} w-full h-full px-3 bg-zinc-700 pt-5 text-white justify-end`}
                            value={password}
                            onInput={(e) => setPassword(e.target.value)
                            }

                        />
                        <label for="password"
                            className={`absolute left-0 mt-4 pl-3  w-full h-full text-md text-gray-300
                                   group-focus-within:text-sm group-focus-within:mt-0 ease transition-all ${password ? "text-sm mt-0" : ""} `} >
                            <span>Password</span>
                        </label>
                    </label>
                    <label
                    for={"password"}
                        className={`${isValidPassword  || password===""? "hidden" : "text-orange-400 text-xs"}`}>
                        Your password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number
                    </label>


                    {/* Buttons */}
                    {/* ----------------------------------------------------------- */}
                    <button
                        className={`rounded-md bg-red-600 mt-5 items-center justify-center px-3 w-full h-10`}
                        title="Log In"
                        onClick={() => LogInUser()}>
                        <p className={`text-white text-xl`}>Log in</p>
                    </button>

                    <div className={`flex flex-col gap-3 mt-8 w-full items-center`}>
                        <Link
                            href={"../signup"}
                            onClick={() => (LogInUser)}>
                            <div className={`flex flex-row gap-2 mt-10 w-full`}>
                                <p className={`text-white text-lg`}> New to Netflix clone? </p>
                                <p className={`text-red-500 text-lg `}>Sign Up!</p>
                            </div>
                        </Link>
                        <button
                            title="Sign Up"
                            onClick={() => (console.log("Hello world"))}>
                            <p className={`text-white/50 text-lg `}>Forgot your password?</p>

                        </button>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

