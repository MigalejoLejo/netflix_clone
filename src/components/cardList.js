
import PreviewCard from "../components/previewCard"


const CardList = ({ movies }) => {

    let MOVIES = { movies }.movies
    console.log("movies is now: ", MOVIES)


    return (
        <div className="flex flex-col pl-5 w-full h-72  overflow-x-scroll overflow-y-visible scrollbar-hide">
            <h2 className="text-xl mb-4 mt-2 font-semibold">listTitle</h2>
            <div className="flex flex-row gap-3 mb-6">
                {MOVIES.map((movie) => (
                    <div key={movie.id}>
                        <PreviewCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    )


}

export default CardList