import { useState, useEffect } from "react"

const Home = () => {
    const [moviePopular,setMoviePopular]=useState([])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/moive?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res=>res.json())
        .catch(data=>setMoviePopular(data.results))
    },[])
    console.log("meo")
    return(
        <div>
            <div className="poster">
                meo
            </div>
        </div>
    )
}
export default Home;