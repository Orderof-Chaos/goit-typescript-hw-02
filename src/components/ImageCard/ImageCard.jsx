import React from 'react'

const ImageCard = ({image}) => {
  return (
      <div>
      <img
        src={image.urls.small}
        alt={image.alt_description || "This image has no description"}
        onClick={() => onClick(image)}
      />
      </div>
  )
}

export default ImageCard