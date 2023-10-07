import React from 'react'
import Nav from './Navbar';
import Content from './content';
import Property from './Property';
import Test from './Testimony';
import Dream from './Dream';
import Agent from './Agents';
import Foot from './Footer';
function Home() {
    return ( 
        <div>
    <Content/>
    <Property/>
    <Test/>
    <Dream/>
    <Agent/>
    <Foot/>
        </div>
     );
}

export default Home;