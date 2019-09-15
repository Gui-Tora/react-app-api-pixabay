import React from 'react'

export default function Imagen(props) {

    const {largeImageURL, likes, previewURL, tags, views} = props.imagen

        
    return (
        <div className='col-12 col-sm6 col-md-4 col-lg-3 mb-4 '>
            <div className='card'>
                <img src={previewURL} alt={tags} className='card-im' />
                <div className="card-body">
                    <p className='card-text'>{likes} Me gusta</p>
                    <p className='card-text'>{views} vistas</p>

                    <a href={largeImageURL} rel="noopener noreferrer" 
                    className='btn btn-primary btn-block'>ver imagen</a>
                </div>
            
            </div>
        </div>
    )
}
