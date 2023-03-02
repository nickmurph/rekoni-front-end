import React from 'react';

const Navigation = ({onRouteChange})  => {
    return (
        <nav className='w-30 pr5' style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('SignIn')} className="f3 link dim black underline tc pointer">Sign Out</p>
        </nav>
    )
}

export default Navigation;