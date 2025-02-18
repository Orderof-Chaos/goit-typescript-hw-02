import Modal from 'react-modal';
import s from './ImageModal.module.css';

const ImageModal = ({ isOpen, closeModal, selectedImage }) => {
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
          <div>
              <h2>
                  {selectedImage.alt_description || "Image"}
              </h2>
              <img
                  src={selectedImage.urls.regular}
                  alt={selectedImage.alt_description}
                  style={{ width: "100%", height: "100%" }}
              />
              <button onClick={closeModal}>Close</button>
          </div>
      </Modal>
  )
}

export default ImageModal