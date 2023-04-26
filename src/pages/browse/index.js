
import Header from "../../components/header"
import FocusView from "../../components/focusView"
import CardList from "../../components/cardList"
import { useEffect, useState } from 'react'
// import FetchTop10Movies from '@/services/fetchTop10Movies'
// import GetMovieDetails from '@/services/getContentDetails'
// import FetchPopularMovies from "@/services/fetchPopularMovies"
// import FetchContent from "@/services/fetchContent"
import GetContentDetails from "@/services/getContentDetails"



import Test from "../../components/test"



export default function Browse() {

    const [type, setType] = useState("movie")
    const [category, setCategory] = useState("top_rated")
    const [contentDetails, setContentDetails] = useState(()=>[])


    // const [topMovies, setTopMovies] = useState([])

    const[x, setX] = useState(0)

    useEffect(()=>{
        setX(x)
        console.log("x: ", x)
    }, x)

    useEffect(()=>{
        setType(type)
        console.log("type: ", type)

    }, )

    useEffect(()=>{
        setCategory(category)
        console.log("category: ", category)

    }, )


    useEffect(() => {
        GetContentDetails(type, contentDetails).then(res => setContentDetails(res))
    }, [])



    // useEffect(() => {
    //     FetchTop10Movies().then(res => setTopMovies(res.results))
    // }, [])




    return (
        <div className=" text-white w-full h-full flex flex-col bg-black">
            <Header/>
            <FocusView type={type} content={contentDetails} />
            {/* <CardList movies = {topMovies}  category = {"top_rated"} setMovieDetails={setMovieDetails} type ={"Movies"} setType ={setType}/> */}
            <CardList  type ={"tv"} category = {"popular"} setContentDetails={setContentDetails} setType ={setType} setCategory = {setCategory}/>
            <CardList  type ={"movie"} category = {"top_rated"} setContentDetails={setContentDetails} setType ={setType} setCategory = {setCategory}/>

            <Test x={x} setX = {setX}/>

        </div>
    )
}