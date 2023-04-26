

const API_KEY = "204d0575f0b77a6ce275bc3e63fa1f17"
const BASE_URL = "https://api.themoviedb.org/3"

async function FetchTop10Movies() {
    try {
        const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
        const jsonData = await response.json()
        return jsonData
    }
    catch (err) {
        console.log("ERROR GRANDE", err)
    }
    
}

export default FetchTop10Movies
