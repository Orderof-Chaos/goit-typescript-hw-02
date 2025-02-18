import React from 'react'

const ImageCard = ({image, openModal}) => {
  return (
      <div>
      <img
        src={image.urls.small}
        alt={image.alt_description || "This image has no description"}
        onClick={() => openModal(image)}
      />
      </div>
  )
}

export default ImageCard