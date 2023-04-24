
import PreviewCard from "../components/previewCard"





const CardList = ({ movies }) => {

    let MOVIES = { movies }.movies
    console.log("movies is now: ", MOVIES)
    // const movie1 = {title:"test title1", gender:"test gender1"}

    // const movie2 = {title:"test title2", gender:"test gender2"}

    // const movie3 = {title:"test title3", gender:"test gender3"}


    // const MOVIES = [
    //     movie1, movie2, movie3
    // ]

    return (
        <div className="w-full h-50 bg-red-400 flex flex-row mb-20">
            <h2>listTitle</h2>
            <div className="flex flex-row gap-3 mt-10 mb-6">
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