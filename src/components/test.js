


const Test = ({x, setX}) => {



    return (
        <p onClick={()=>(setX(x+1000))} className="h-30 w-30">{x}</p>
    )
}

export default Test