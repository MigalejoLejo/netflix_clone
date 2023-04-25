
import N_logo from "../../public/images/N_logo.svg"
import Top10 from "../../public/images/Top10.svg"
import Polygon1 from "../../public/images/Polygon1.svg"
import Info_btn from "../../public/images/Info_btn.svg"
import Genres from "../components/genres"




const FocusView = ({type, movie}) => {
    
    
    return (
        <div
            style={movie && {"--imageUrl": `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})` }}
            className="relative w-full h-screen z-0 bg-cover bg-no-repeat bg-[image:var(--imageUrl)]">

            {/* Degradador de abajo hacia arriba */}
            <div className='absolute w-full h-[200px] bg-gradient-to-t from-black bottom-0'>
            </div>


            {/* Contenido del focusView */}
            <div className="ml-9 absolute bottom-5 w-[600px] h-[400px]">


                {/* content type */}
                <div className="flex flex-row gap-5 -ml-2 items-center">
                    <N_logo className="scale-50" />
                    <h2 className="text-xl tracking-[0.75rem]">{type}</h2>
                </div>


                {/* Title */}
                <div>
                    <h2 className="text-[40px] mt-5 font-bold">
                        {movie?.title}
                    </h2>
                </div>


                {/* top 10 */}
                <div className='flex items-center -ml-2 mb-3 '>
                    <Top10 className="scale-50" />
                    <h3 className='text-l font-semibold'>In top 10 movies today</h3>
                </div>


                {/* description */}
                <div>
                    <h2 className="text-md bg-gradient-to-r from-black	line-clamp-3">
                        {movie?.overview}
                    </h2>
                </div>


                {/*Genres*/}
                <div className="font-semibold pl-10 pt-3 pb-3 flex ">
                    <Genres genres = {movie?.genres}/>
                </div>


                {/*buttons*/}
                <div className='flex gap-2 mt-3'>
                    <button className="flex items-center justify-center w-[150px] h-[20] bg-white text-black font-bold rounded-md">
                        <Polygon1 className="scale-50 " />
                        Play
                    </button>

                    <button className="flex items-center justify-center w-[150px] h-[20] bg-gray-500/90 text-white font-bold rounded-md">
                        <Info_btn className="scale-50 " />
                        More info
                    </button>
                </div>
            </div>
        </div>

    )
}

export default FocusView