import React from 'react';
// let isSignedIn = true;

const Navigation = ({onRouteChange, isSignedIn})  => {
        if (isSignedIn){
        return (
        <nav className='w-30 pr5' style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
        )
        } else {
        return (
        <nav className='w-30 pr5' style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline tc pointer">Sign In</p>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <p onClick={() => onRouteChange('register')} className="f3 link dim black underline tc pointer">Register</p>
        </nav>
        );
    }
}

export default Navigation;