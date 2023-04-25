import { useEffect, useState } from "react"
import N_logo from "../../public/images/N_logo.svg"
import GetMovieDetails from "../services/getMovieDetails"
import Genres from "../components/genres"


const FocusView = ({ movie, setMovieDetails }) => {

    const [cardMovieDetails, setCardMovieDetails] = useState([])

    useEffect(() => {
        GetMovieDetails(movie).then(res => setCardMovieDetails(res))
    }, [])
    const genres = cardMovieDetails?.genres
    console.log("card movie details outside: ", genres)



    return (

        <div onClick={()=>(setMovieDetails(cardMovieDetails))} >
            <div
                style={{ "--imageUrl": `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})` }}
                className="flex flex-col justify-between w-72 h-40 bg-[image:var(--imageUrl)] bg-cover">

                {/* Logo y Release Date */}
                <div className="flex flex-row justify-between items-center pr-4">
                    <N_logo className="scale-50" />
                    <p className="-mt-4 bg-gray-800/20 p-1 rounded-md">{movie?.release_date}</p>
                </div>

                <div className="p-4 bg-gradient-to-t from-black flex flex-col">

                    {/* Titulo de la Card */}
                    <p >{movie?.title}</p>

                    {/* Genero */}
                    <p className="ml-auto mr-0 text-xs">
                        <Genres genres={genres} />
                    </p >

                </div>


            </div>
            {/* <div className=" absolute bottom-0 w-72 h-40 bg-gradient-to-t from-black"></div> */}
        </div>
    )


}

export default FocusView