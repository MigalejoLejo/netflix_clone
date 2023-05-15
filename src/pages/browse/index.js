

import Header from "../../components/header"
import FocusView from "../../components/focusView"
import CardList from "../../components/cardList"
import { useEffect, useState } from 'react'
import { auth } from "../../services/firebase";
import { LogIn } from "../login";

import FetchTop10Movies from "@/services/fetchTop10Movies"



import Test from "../../components/test"



export default function Browse() {

    const [user, setUser] = useState(auth.currentUser)
    const[isLoggedOn, setIsLoggedOn] = useState()


    useEffect(() => {
      const subscriber = auth.onAuthStateChanged(user => {
        if (user) {
          console.log("user at browse: ",user)
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

    const [type, setType] = useState("movie")
    const [category, setCategory] = useState("top_rated")
    const [topMovies, setTopMovies] = useState([])
    const [initialContent, setInitialContent] = useState("init")
    const [contentDetails, setContentDetails] = useState()

    
   


    const [x, setX] = useState(0)

    useEffect(() => {
        setX(x)
        console.log("x: ", x)
        console.log(auth.currentUser)
    }, [x])

    useEffect(() => {
        setType(type)
        console.log("type: ", type)

    }, [])

    useEffect(() => {
        console.log("Hello World")

    }, [])

    useEffect(() => {
        setCategory(category)
        console.log("category: ", category)

    }, [])

    useEffect(() => {
        FetchTop10Movies().then(data => (data.results)).then(res => setTopMovies(res))
        console.log("TOP MOVIES: ", topMovies)
    }, [initialContent])

    useEffect(() => {
        if (topMovies.length > 0) {
            setContentDetails(topMovies[0])
        }
    }, [topMovies])

    const checkUser = () => {
        setUser( auth.currentUser)
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
            }, 1000);
        };
    };

    return (
     
                <div className=" text-white w-full h-full flex flex-col bg-black">
                    <Header userName={user.displayName} userPicture={user.photoURL} />
                    <FocusView type={type} content={contentDetails} />
                    {/* <CardList movies = {topMovies}  category = {"top_rated"} setMovieDetails={setMovieDetails} type ={"Movies"} setType ={setType}/> */}
                    <CardList type={"tv"} category={"popular"} setContentDetails={setContentDetails} setType={setType} setCategory={setCategory} />
                    <CardList type={"movie"} category={"top_rated"} setContentDetails={setContentDetails} setType={setType} setCategory={setCategory} />

                    <Test x={x} setX={setX} />

                </div>
            

    )
}