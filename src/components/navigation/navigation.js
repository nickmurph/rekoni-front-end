import React from 'react';
let isSignedIn = true;

const Navigation = ({onRouteChange})  => {
        if (isSignedIn){
        return (
        <nav className='w-30 pr5' style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('SignIn')} className="f3 link dim black underline tc pointer">Sign Out</p>
        </nav>
        )
        } else {
            // let logoWrap = document.getElementById('logoWrapper');
            // logoWrap.className = 'center';
            return;
        }
}

export default Navigation;