
import N_logo from "../../public/images/N_logo.svg"
import Top10 from "../../public/images/Top10.svg"
import Polygon1 from "../../public/images/Polygon1.svg"
import Info_btn from "../../public/images/Info_btn.svg"
import Genres from "../components/genres"




const FocusView = ({ type, content }) => {


    return (
        <div
            style={content && { "--imageUrl": `url(https://image.tmdb.org/t/p/original${content?.backdrop_path})` }}
            className="w-full h-[70%] z-0 bg-cover bg-no-repeat bg-[image:var(--imageUrl)]">

            {/* Contenido del focusView */}
            <div className=" w-full h-[30%]">

                {/* separator on top */}
                <div className="h-[200px]"></div>

                <div className="bg-gradient-to-t from-black">

                {/* info container on the left-bottom */}
                <div className="ml-6 w-[40%]">


                    {/* content type */}
                    <div className="flex flex-row gap-5 items-center">
                        <N_logo className="scale-50" />
                        <h2 className="text-xl tracking-[0.75rem]">{type}</h2>
                    </div>


                    {/* Title */}
                    <div>
                        <h2 className="text-[40px] mt-5 font-bold">
                            {content?.title}
                        </h2>
                    </div>


                    {/* top 10 */}
                    <div className='flex items-center -ml-2 mb-3 '>
                        <Top10 className="scale-50" />
                        <h3 className='text-l font-semibold'>In top 10 movies today</h3>
                    </div>


                    {/* description */}
                    <div>
                        <h2 className="text-md line-clamp-3">
                            {content?.overview}
                        </h2>
                    </div>


                    {/*Genres*/}
                    <div className="font-semibold pl-10 pt-3 pb-3 flex ">
                        <Genres genres={content?.genres} />
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

                        {/* Degradador de abajo hacia arriba */}

                    </div>
                </div>

                </div>

               
            </div>

        </div>

    )
}

export default FocusView