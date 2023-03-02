import React from 'react';

const FaceRecognition = ({imageURL})  => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id='inputImage' width='500px' height='auto' alt='' src={imageURL} />
            </div>
        </div>
    )
};

export default FaceRecognition;