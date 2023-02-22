import React from 'react';

const ImageLinkForm = ()  => {
    return (
        <div>
            <p className='f3'>
                {'Rekoni will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div classname="center pa4 br3 shadow-5 center">
                    <input className ='f4 pa2 w-70 center' type='text' />
                    <button className='w-30 grow f4 link ph3 pv dib white bg-light-purple center'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;