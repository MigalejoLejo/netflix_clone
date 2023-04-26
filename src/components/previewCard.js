import { useEffect, useState } from "react"
import N_logo from "../../public/images/N_logo.svg"
import GetContentDetails from "../services/getContentDetails"
import Genres from "../components/genres"


function PreviewCard ({ content, type, category, setContentDetails, setType, setCategory}) {

    

    const genres = content?.genres


        return (
            
            <div onClick={()=>(setContentDetails(content), setType(type), setCategory(category))} >
            <div
                style={{ "--imageUrl": `url(https://image.tmdb.org/t/p/original${content?.backdrop_path})` }}
                className="flex flex-col justify-between w-72 h-40 bg-[image:var(--imageUrl)] bg-cover">

                {/* Logo y Release Date */}
                <div className="flex flex-row justify-between items-center pr-4">
                    <N_logo className="scale-50" />
                    <p className="-mt-4 bg-gray-800/20 p-1 rounded-md">{content?.release_date}</p>
                </div>

                <div className="p-4 bg-gradient-to-t from-black flex flex-col">

                    {/* Titulo de la Card */}
                    <p >{content?.title}</p>

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

export default PreviewCard