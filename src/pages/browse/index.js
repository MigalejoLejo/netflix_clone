
import Header from "../../components/header"
import FocusView from "../../components/focusView"
import CardList from "../../components/cardList"
import { useEffect, useState } from 'react'
import FetchTop10 from '@/services/requests'



export default function Browse() {

    const type = "Movies"
    const [topMovies, setTopMovies] = useState([])

    useEffect(() => {
        FetchTop10().then(res => setTopMovies(res.results))
        console.log("dentro: ", topMovies)
    }, [])

    console.log("dentro: ", topMovies)
    // let movie = topMovies[0]



    return (
        <div className=" text-white w-full h-[850px] flex flex-col bg-black">
            <Header/>
            <FocusView type={type} movie={topMovies[0]}/>
            {topMovies?<CardList movies = {topMovies}/>:<p>loading... </p>}

            </div>
    )
}