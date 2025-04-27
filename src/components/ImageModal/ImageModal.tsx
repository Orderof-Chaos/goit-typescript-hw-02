import Modal from 'react-modal';
import s from './ImageModal.module.css';
import {respPhoto} from '../Types/types'

type Props = {
    isOpen: boolean;
    closeModal: () => void;
    selectedImage: respPhoto|null
 }

const ImageModal = ({ isOpen, closeModal, selectedImage }: Props) => {
    if (!selectedImage) return;
        

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
   


  return (
      <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Modal image"
          style={customStyles}
          overlayClassName="Overlay"
      >
          <div className={s.modal}>
              <h2 className={s.description}>
                  {selectedImage.alt_description || "Image"}
              </h2>
              <img
                  className={s.modalImage}
                  src={selectedImage.urls.regular}
                  alt={selectedImage.alt_description}
                  style={{ width: "100%", height: "100%", maxHeight: "77vh"}}
              />
              <button onClick={closeModal} className={s.modalBtn}>Close</button>
          </div>
      </Modal>
  )
}

export default ImageModal