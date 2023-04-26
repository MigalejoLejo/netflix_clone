
import { useEffect, useState } from "react"
import PreviewCard from "../components/previewCard"
import FetchContent from "@/services/fetchContent"



function CardList({ type, category, setContentDetails, setType, setCategory }) {

    const [contentList, setContentList] = useState (()=>[])
      
    useEffect(() => {
        FetchContent(type, category).then(res => setContentList(res.results))
        console.log("contentList: ", contentList)
    }, [])
    
    try {
        return (


            <div className="pl-5 mt-10 w-full overflow-x-scroll overflow-y-visible scrollbar-hide">
                <h2 className="absolute text-xl font-semibold">{category}</h2>
                <div className="mt-10 flex flex-row gap-3 ">

                    { contentList.map((content) => (
                        <div key={content.id}>
                            <PreviewCard content={content} type={type} category={category} setContentDetails={setContentDetails} setType={setType} setCategory={setCategory} />
                        </div>
                    ))}
                </div>
            </div>

        )
    } catch (err) {
        return (
            <div>error</div>
        )
    }

}

export default CardList