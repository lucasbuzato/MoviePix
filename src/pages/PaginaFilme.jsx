import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function PaginaFilmes(){

    const { id } = useParams();
    const [filme, setFilmes] = useState({});


    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect(() => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response))
        .catch (error => console.log(error))
    },[])

    return(
        <>
        <div className="p-36  mx-5 flex items-center">
        <img className="" src={`${urlImg}${filme.poster_path}`}/>
        <div className="pl-16  mx-5">
        <h1 className="font-bold text-2xl text-white">{filme.title}</h1>
        <p >{filme.overview}</p>
        </div>
        </div>

        <h1 class="p-10 flex justify-center font-bold text-4xl text-White">Trailer</h1>
        <div className="flex justify-center">
        <img class=""src="/src/componentes/Images/Rectangle 4236.png" alt="" />
        </div>
        </>
    )
}