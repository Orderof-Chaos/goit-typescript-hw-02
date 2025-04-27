import s from "./ImageCard.module.css"
import { respPhoto } from '../Types/types'

type Props = {
    image: respPhoto;
    openModal: (image: respPhoto) => void
}

const ImageCard = ({image, openModal}: Props) => {
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