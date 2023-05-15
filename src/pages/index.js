import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { LogIn } from './login';
import { auth } from "../services/firebase";

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const [user, setUser] = useState()


  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(user => {
      if (user) {
        console.log("user at login: ",user)
        setUser(user)
      } else {
        console.log("no user loged in at loginscreen")
      }
    })
    return subscriber
  }, [])


  return (
    
        <LogIn/>
      

  )

}