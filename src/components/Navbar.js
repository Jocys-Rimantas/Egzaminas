import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
   <nav className="navbar">
        <h1>Knygu rezervacijos programa</h1>
    
        <div className="links">
        <Link to="/meniu">Pradinis puslapis</Link>
        <Link to="/create">Pridėti knyga </Link>
        <Link to="/home">Visos knygos</Link>
        </div>
    </nav>
 );
} 
 
export default Navbar;