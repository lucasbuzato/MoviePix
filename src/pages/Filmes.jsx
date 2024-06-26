import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export default function Filmes() {


    const [filmes, setFilmes] = useState([])
    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect(() => {
        fetch(`${urlBase}popular?${apiKey}`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))
    },[])



    return ( 
        <>
        <h1 class="flex py-5  mx-5 font-bold text-4xl text-Red-claro">Filmes</h1>
        <div className="listaFilmes flex justify-center flex-row gap-6 flex-wrap">
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