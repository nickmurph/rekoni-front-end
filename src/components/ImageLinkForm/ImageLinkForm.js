import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ()  => {
    return (
        <div>
            <p className='f3'>
                {'Rekoni will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-1'>
                    <input className ='f4 pa2 w-70 bg-lightest-blue center' placeholder='paste your url here...' type='text' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;