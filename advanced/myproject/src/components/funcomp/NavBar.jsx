import '../../assets/css/NavBar.css'
import { Link } from 'react-router-dom';
var NavBar = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                    <li><Link to="/use-effect" className='link'>useEffect</Link></li>
                    <li><Link to="/use-ref" className='link'>useRef</Link></li>
                    <li><Link to="/use-context" className='link'>useContext</Link></li>
                    <li><Link to="/use-memo" className='link'>usememo</Link></li>
                    <li><Link to="/images" className='link'>Images</Link></li>
                    <li><Link to="/signup" className='link'>signup</Link></li>
                    <li><Link to="/signin" className='link'>signin</Link></li>

                </ul>
            </nav>
        </header>
    )
}
export default NavBar;

