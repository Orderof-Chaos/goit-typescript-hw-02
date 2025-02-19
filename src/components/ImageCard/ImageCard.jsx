import s from "./ImageCard.module.css"

const ImageCard = ({image, openModal}) => {
  return (
      <div className={s.imageCard}>
      <img 
        src={image.urls.small}
        alt={image.alt_description || "This image has no description"}
        onClick={() => openModal(image)}
      />
      </div>
  )
}

export default ImageCard