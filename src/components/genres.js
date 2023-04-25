
 function Genres ({genres}){

    return (
        <span  >
            {genres?.map((genre) => (
               <span key={genre.id}> {genre.name}</span> 
            )
               
            )}
        </span>
    )
}

export default Genres