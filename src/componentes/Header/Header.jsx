import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-between items-center font-bold text-xl bg-Red text-Red-claro p-5 mb-3">
            <img className="w-40" src="/src/componentes/Images/image.png" alt="" />
            <Navbar/>
        </header>
     );
}

export default Header ;