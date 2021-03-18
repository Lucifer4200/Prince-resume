import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

function Gallery() {
    const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);
    useEffect ( () => {
        // API call for featching images
        axios.get('https://picsum.photos/v2/list')
        .then(function (response) {
        // handle success
        updatePhotoGalleryArray(response.data)
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }, [] )
    return (
        <Container>
            <div className='imgGallery overflow-hidden'>
                <div className="row">
                {
                    photoGalleryArray.slice(0,12).map((photoGalleryArrayItem, index)=>{
                        console.log(photoGalleryArrayItem.url, index)
                        return (
                            <div key={index} className='col-lg-3 col-md-4 col-sm-6 col-12 p-1'>
                                <img 
                                    src={photoGalleryArrayItem.download_url} 
                                    alt={`images_${photoGalleryArrayItem.id}`}
                                    height='300'
                                    width='100%' 
                                />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </Container>
    )
}

export default Gallery
