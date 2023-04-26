
const API_KEY = "204d0575f0b77a6ce275bc3e63fa1f17"
const BASE_URL = "https://api.themoviedb.org/3"


async function GetContentDetails( type, content ) {

    try {
        const id = content.id

        const response = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`)
        const jsonData = await response.json()
        return jsonData

    }
    catch (err) {
        console.log("content undefined on fetch service")
    }



}

export default GetContentDetails



