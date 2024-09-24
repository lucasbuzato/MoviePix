import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <div className="font-bold bg-white">
            <div className="flex justify-between">
            <img className="w-52 h-48" src="/LOGO MARIA BOTANICA.png" alt="" />
            <div className="flex items-center p-9">
            <img  className="h-8 w-8 m-1" src="/icons8-instagram-32 1.png" alt="" />
            <img  className="h-8 w-8 m-1" src="/icons8-pinterest-32 1.png" alt="" />
            <img  className="h-8 w-8 m-1" src="/icons8-tiktok-32 1.png" alt="" />
            <img  className="h-8 w-8" src="/Frame 246.png" alt="" />
            </div>
            </div>
            <div className="flex justify-center bg-Verde text-Red-claro p-2">
            <Navbar/>
            </div>
        </div>
     );
}

export default Header ;