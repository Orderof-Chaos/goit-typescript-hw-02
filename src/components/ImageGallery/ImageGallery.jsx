import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
const ImageGallery = () => {
  
    return (
        <ul>
            {/* Набір елементів списку із зображеннями */}
            <li>
                <ImageCard/>
            </li>
        </ul>
    )
}

export default ImageGallery