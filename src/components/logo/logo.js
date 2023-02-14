import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css';
import HighResLogo from './logo-black-highres-transparent.png';


const Logo = ()  => {
    return (
        <div className="ma4 mt0" style={{paddingLeft: "3.5%"}}>
            <Tilt classname="Tilt br2 shadow-2" tiltMaxAngleX={10} tiltMaxAngleY={3} tiltReverse={false}>
                <div style={{ height: '14%', width: '10%', background: "transparent"}}>
                    <h1 className="Tilt-inner pa3"><img style={{paddingTop: '5px'}}alt='logo' src={HighResLogo}/></h1>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;