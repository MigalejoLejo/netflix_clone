
import Header from "../../components/header"
import FocusView from "../../components/focusView"
import CardList from "../../components/cardList"
import { useEffect, useState } from 'react'
import FetchTop10 from '@/services/fetchTop10'
import GetMovieDetails from '@/services/getMovieDetails'
import Test from "../../components/test"



export default function Browse() {

    const type = "Movies"
    const [topMovies, setTopMovies] = useState([])
    const [movieDetails, setMovieDetails] = useState([])

    const[x, setX] = useState(0)

    useEffect(()=>{
        setX(x)
    }, x)

    useEffect(() => {
        FetchTop10().then(res => setTopMovies(res.results))
    }, [])


    useEffect(() => {
        GetMovieDetails(topMovies[0]).then(res => setMovieDetails(res))
    }, movieDetails)


    return (
        <div className=" text-white w-full h-[850px] flex flex-col bg-black">
            <Header/>
            <FocusView type={type} movie={movieDetails} />
            {topMovies?<CardList movies = {topMovies}  listTitle = {"Top Rated"} setMovieDetails={setMovieDetails}/>:<p>loading... </p>}
            <Test x={x} setX = {setX}/>

        </div>
    )
}