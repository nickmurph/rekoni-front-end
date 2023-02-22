import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import HighResLogo from './logo-black-highres-transparent.png';


const Logo = ()  => {
    return (
        <div className="ma4 mt0" style={{paddingLeft: "3.5%"}}>
            <Tilt className="Tilt br2 shadow-2" tiltMaxAngleX={20} tiltMaxAngleY={20} tiltReverse={false}  style={{ height: '14%', width: '10%'}}>
                    <h1 className="Tilt-inner pa3"><img style={{paddingTop: '5px'}}alt='logo' src={HighResLogo}/></h1>
            </Tilt>
        </div>
    )
}

export default Logo;