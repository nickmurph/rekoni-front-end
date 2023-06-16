import React from 'react';
import './FaceRecognition.css';



const generateBoxes = (boxArray) => {
    if (boxArray){
    const boxDivArray = []
    for (let box of boxArray){
        let curBoxDiv = <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        boxDivArray.push(curBoxDiv)
    }
    return boxDivArray
    }
    else {return <></>}
}

const FaceRecognition = ({imageURL, boxes})  => {
    console.log(boxes.length)
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id='inputImage' width='500px' height='auto' alt='' src={imageURL} />
            {generateBoxes(boxes)}
            </div>
        </div>
    )
};

export default FaceRecognition;