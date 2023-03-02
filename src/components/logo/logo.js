import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import HighResLogo from './logo-black-highres-transparent.png';


const Logo = ()  => {
    return (
        <div className="">
        <div className="ma4 mt0" style={{paddingLeft: "3.5%"}}>
            <Tilt className="Tilt ba br4 shadow-1" tiltMaxAngleX={20} tiltMaxAngleY={20} tiltReverse={false}  style={{ height: 'max(140px,14%)', width: 'max(100px,10%)', background: ' #cdecff'}}>
                    <h1 className="Tilt-inner pa3"><img style={{paddingTop: '5px'}}alt='logo' src={HighResLogo}/></h1>
            </Tilt>
        </div>
        </div>
    )
}

export default Logo;