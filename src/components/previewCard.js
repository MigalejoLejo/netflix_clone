import N_logo from "../../public/images/N_logo.svg"





const FocusView = ({ movie }) => {

    return (

        <div >
            <div
                style={{ "--imageUrl": `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})` }}
                className="flex flex-col justify-between w-72 h-40 bg-[image:var(--imageUrl)] bg-cover">

                {/* Logo y Release Date */}
                <div className="flex flex-row justify-between items-center pr-4">
                    <N_logo className="scale-50" />
                    <p className="-mt-4">{movie?.release_date}</p>
                </div>

                {/* Titulo de la Card */}
                <p className="p-8 ">{movie?.title}</p>
            </div>
            <div className=" absolute bottom-0 w-72 h-40 bg-gradient-to-t from-black"></div>
        </div>
    )


}

export default FocusView