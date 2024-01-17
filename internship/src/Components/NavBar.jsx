import('tailwindcss').Config;
import img1 from './images/logo.jpg';
import './navbar.css';

function NavBar(){
  return <nav className='nav'>
    <img className='img' src={img1}/>
    <div>
    <table className='tab'>
        <tr >
            <th className='	background-color: inherit'>Home</th>
            <th>Flashcard</th>
            <th>Contact</th>
            <th>FAQ</th>
            <th><button className='btn'>Login</button></th>
        </tr>
    </table>
    </div>
  </nav>
}
export default NavBar;