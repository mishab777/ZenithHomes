import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Nav() {
    return ( 

        <div className='navbar'>
            <div><div className='navbar-1'>
                <div className="navbar-2">
                    <div className="logo">
                        <h1>Zenith Home</h1>

                    </div>
                    <div className="items">
                        <span className='home'>Home</span>
                        <Link className='menus' to='Properties'><span>Properties</span></Link>
                        <Link className='menus' to='Services'><span>Services</span></Link>
                        <Link className='menus' to='About'><span>About</span></Link>
                        <Link className='menus' to='contact'><span>Contact Us</span></Link>

                    </div>

                </div>

            </div>
            <div className="head">
                <h1>FIND A PERFECT DREAM HOUSE</h1>
            </div>
            <div className="search">
                <input type="search" name="" id=""  placeholder='Your zip code or City eg.New York'/>
                <button>Search</button>
                
            </div>
            <div className="txt">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui reprehenderit totam? Quod maiores.</span>
            </div>
            <div className="prop">
                <a href="">View Properties</a>
            </div>
            </div>
            <Outlet/>
        </div>
     );
}

export default Nav;