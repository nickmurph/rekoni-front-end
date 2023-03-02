import React from 'react';
let isSignedIn = false;

const Navigation = ({onRouteChange})  => {
        if (isSignedIn){
        return (
        <nav className='w-30 pr5' style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('SignIn')} className="f3 link dim black underline tc pointer">Sign Out</p>
        </nav>
        )
        } else {
            document.getElementById('logo');
            return 0;
        }
}

export default Navigation;