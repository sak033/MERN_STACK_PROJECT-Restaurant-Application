
import {Link} from 'react-scroll';
import {GiHamburgerMenu} from 'react-icons/gi';
import data from '../Pages/restApi.json';
import { useState } from 'react';

const Navbar = () => {
    const [show, setShow]=useState(false);
  return (
    <nav>
       <div className="logo">SAAKS</div>
       <div className={show? "navLinks showmenu":"navLinks"}>
        <div className="links">
            {
                data.data[0].navbarLinks.map(element=>{

                    return(
                        <Link to={element.Link} key={element.id} spy={true} smooth={true} duration={500}>
                            {element.title}
                        </Link>
                    )
                
                })
                    
            
            }
        </div>
        <button className='menuBtn'>OUR MENU</button>
       </div>
       <div className="hamburger" onClick={()=>setShow(!show)}>
        <GiHamburgerMenu />
       </div>
    </nav>
  );
};

export default Navbar