import s from "./ImageGallery.module.css"
import ImageCard from '../ImageCard/ImageCard'
const ImageGallery = ({images, openModal}) => {
  
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