import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 import './Navbar.css'; 
 import { Button } from './Button';

function Navbar() { 
    const [click, setClick] = useState(false); 
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
      
    const showButton = () => {
         if(window.innerWidth <= 960) {
             setButton(false);
         }else { 
             setButton(true);
         } 
        }; 
         
        useEffect(() => { 
            showButton();
        },[]);
    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'> 
                    <Link to="/" className='navbar-logo' onclick={closeMobileMenu}>
                         TRVL <i className='fab fa-typo3'/>
                    </Link>
                    <div className='menu-icon' onclick={handleClick}> 
                        <i className= {click ? 'fas fa-times' : 'fas fa-bars'}/> 
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                         <li className='nav-item'>
                            <Link to='/' className='nav-links' onclick={closeMobileMenu}>Início</Link>
                         </li> 
                         <li className='nav-item'>
                            <Link to='/servicos' className='nav-links' onclick={closeMobileMenu}>Serviços</Link>
                         </li> 
                         <li className='nav-item'>
                            <Link to='/produtos' className='nav-links' onclick={closeMobileMenu}>Produtos</Link>
                         </li>
                         <li className='nav-item'>
                            <Link to='/cadastre-se' className='nav-links' onclick={closeMobileMenu}>Cadastre-se</Link>
                         </li>
                    </ul>
                     {button && <Button buttonStyle='btn--outline'>Cadastre-se 
                         </Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;