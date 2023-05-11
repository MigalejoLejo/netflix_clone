import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link"
import NetflixLogo from "../../../public/images/NetflixLogo.svg"
import { auth } from "../../services/firebase";
import { LogIn } from '../login';
import { useEffect, useState } from 'react';
import Home from '..';


const inter = Inter({ subsets: ['latin'] })

export default function SelectUser({ }) {

   
    const [user, setUser] = useState()
    const[isLoggedOn, setIsLoggedOn] = useState()


    useEffect(() => {
      const subscriber = auth.onAuthStateChanged(user => {
        if (user) {
          console.log("user at login: ",user)
          setUser(user)
          setIsLoggedOn(true)
        } else {
          console.log("no user loged in at browse-screen")
        }
      })
      return subscriber
    }, [])

    useEffect(()=>{
        if (!isLoggedOn){
            setUser(null)
        }
        
    }, [isLoggedOn])



    const logOut = () => {
        auth.signOut()
        setIsLoggedOn(false)
        console.log(auth.currentUser)
    }

    return (

        <div>

            {user?

                <main className="bg-black w-screen h-screen flex flex-col items-center justify-center">
                    <NetflixLogo className="mb-20" />
                    <h1 className="text-3xl font-semibold text-white text-2xl mb-3">
                        Who's watching?
                    </h1>

                    <div className="flex flex-row gap-3 mt-6">
                        {USERS.map((user, index) => (
                            <div key={index} className="flex flex-col items-center justify-center">
                                <div className="rounded-md bg-gray-200 w-[128px] h-[128px] ">
                                    <Link key={user.name} href={user.link}
                                        onClick={() => (auth.currentUser.displayName = user.name, auth.currentUser.photoURL = user.avatar)}>
                                        <Image src={user.avatar} width={128} height={128} alt="" />
                                        <p className="text-white text-xs text-center mt-3">
                                            {user.name}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>


                    <p onClick={()=>logOut()} className='absolute top-0 right-0 m-5 text-red-600 text-lg font-semibold cursor-pointer'>Log Out</p>

                </main>
                :
                <Home />

            }
        </div>
    )
}

const USERS = [
    { name: "Felix", avatar: "https://api.dicebear.com/6.x/personas/svg?seed=Felix", link: "/browse" },
    { name: "Aneka", avatar: "https://api.dicebear.com/6.x/personas/svg?seed=Aneka", link: "/browse" },
    { name: "Matias", avatar: "https://api.dicebear.com/6.x/personas/svg?seed=Matias", link: "/browse" },
    { name: "Add Profile", avatar: "https://api.dicebear.com/6.x/icons/svg?icon=plug", link: "/browse" },
]

