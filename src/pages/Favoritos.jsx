import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

export default function Favoritos() {


    const [filmes, setFilmes] = useState([])
    const [Carrosels, setCarrosel] = useState([])
    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect(() => {
        fetch(`${urlBase}popular?${apiKey}`)
        .then(response => response.json())
        .then(response => setCarrosel(response.results))
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))
    },[])



    return ( 
        <>
        <Flicking
        align="prev" circular={true}onMoveEnd={e => {console.log(e);}}>
         {
            Carrosels.map(
                Carrosel => (
                    <div>
                        <div className="panel w-screen"><img src={`${urlImg}${Carrosel.backdrop_path}`} alt="" className="w-screen"/></div>
                     </div>
                )
            )
        }
        </Flicking>

        <h1 class="flex py-5  mx-5 font-bold text-4xl text-Red-claro">Favoritos</h1>
        <div className=" listaFilmes flex justify-center flex-row gap-6 flex-wrap">
            {
                filmes.map(
                    filme => (
                        <div className="card-film" key={filme.id}>
                            <img src={`${urlImg}${filme.poster_path}`}/>
                            <h1>{filme.title}</h1>
                            <Link to={`${filme.id}`} className="bg-blue-500">Saber Mais</Link>
                        </div>
                    )
                )
            }
           
        </div>
        </>

     );
}
