import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-56 font-bold font-customFont  '>
                <li><Link to ="/"> Home</Link></li>
                <li><Link to ="filmes"> Sobre </Link></li>
                <li><Link to ="favoritos"> Contato </Link></li>
                <li><Link to ="login"> Blog </Link></li>
            </ul>
        </nav>
     );
}

export default Navbar ;