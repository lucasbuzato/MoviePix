import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import data from '../../articles.json'

function Home(){
    return ( 
        <>



<Flicking
            align="prev" circular={true}onMoveEnd={e => {console.log(e);}}>
            <div className="panel w-screen"><img src="/src/componentes/Images/pexels-brunomassao-2335048.jpg" alt="" /></div>
    
            <div className="panel w-screen"><img src="/src/componentes/Images/pexels-alexfu-1188750.jpg" alt="" /></div>
    
            <div className="panel w-screen"><img src="src/componentes/Images/pexels-donaldtong94-109669.jpg" alt="" /></div>
    
        </Flicking>



  <h1 className="flex py-5  mx-5 font-bold text-4xl text-Red-claro">Noticias</h1>
            <div className=' grid grid-cols-3 gap-4 items-start'>
            {
                data.map( (artigo, index) => (
                    <div className='card p-5 flex flex-col items-center content-center  ' key={index}>
                        <img className="w-96 p-2 " src={artigo.image} alt={artigo.title} />
                        <h2 className='text-center font-bold text-3xl p-2 '>{artigo.title}</h2>
                        <div className='tags flex justify-center p-2 '>
                            {artigo.tags.map( (tag, index) => (
                                <span className="bg-purple-600 p-1 m-1" key={index}>{tag}</span>
                            ))}
                        </div>
                        <div className='texto text-center'>
                        {artigo.text.map( (paragrafo,index) => (
                            <p key={index}>{paragrafo}</p>
                        ))}
                        </div>

                    </div>
                ))
            }
            </div>
        </>
    );
  }
export default Home ;