import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-3 font-normal font-customFont'>
                <li><Link to ="/"> Home</Link></li>
                <li><Link to ="filmes"> Filmes </Link></li>
                <li><Link to ="favoritos"> Favoritos </Link></li>
                <li><Link to ="login"> Login </Link></li>
            </ul>
        </nav>
     );
}

export default Navbar ;