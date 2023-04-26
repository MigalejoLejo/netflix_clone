
 function Genres ({genres}){

    return (
        <span className="flex gap-3"  >
            {genres?.map((genre) => (
               <span key={genre.id}> {genre.name}  </span> 
            )
               
            )}
        </span>
    )
}

export default Genres