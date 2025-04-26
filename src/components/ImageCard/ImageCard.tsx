import s from "./ImageCard.module.css"
import { Image } from '../Types/types'

type Props = {
    image: Image;
    openModal: (image: any) => void
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