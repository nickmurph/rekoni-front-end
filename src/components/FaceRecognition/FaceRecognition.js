import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, box})  => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id='inputImage' width='500px' height='auto' alt='' src={imageURL} />
            <div className="bounding-box"></div>
            </div>
        </div>
    )
};

export default FaceRecognition;