
import "@egjs/react-flicking/dist/flicking.css";
import data from '../../articles.json'

function Home(){
    return ( 
        <>
        <div className="flex mb-24">
        <div>
            <img className="mt-10 " src="/fotocarrosel.png" alt="" />
            <p className="font-bold text-3xl absolute left-9 top-2/4">
            “Para tocar o inacessível chão<br></br>
            é necessario a imensurável compreensão”
            </p>
        </div>
        </div>
        <div className="flex bg-Cinza justify-around mb-20 text-xl">
            <div className="flex-col text-black w-96 p-8 h-24">
            <p className="text-black mb-5 font-bold">Lorem Ipsum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc urna, scelerisque sit amet erat sit amet, efficitur maximus magna.</p>
            </div>
            <div className="flex flex-col bg-Verde flex w-96 p-8 h-96 relative top-16">
            <p className="mb-5 font-bold">Lorem Ipsum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc urna, scelerisque sit amet erat sit amet, efficitur maximus magna.</p>
            </div>
        </div>
        </>
    );
  }
export default Home ;