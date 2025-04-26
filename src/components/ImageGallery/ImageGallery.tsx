import s from "./ImageGallery.module.css"
import ImageCard from '../ImageCard/ImageCard'
import {Image} from '../Types/types'


type Props = {
    images: Image[];
    openModal: (image: any) => void
}


const ImageGallery = ({images, openModal}: Props) => {
  

    
    return (
        <ul className={s.gallery}>
            
            {images.map(image =>
                <li key={image.id} className={s.galleryCard}>
                    <ImageCard
                        image={image}
                        openModal={openModal}
                    />
                </li>)}
        </ul>
    )
}
export default ImageGallery