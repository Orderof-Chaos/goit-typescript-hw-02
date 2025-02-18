import { useEffect, useState } from 'react'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Loader from "./components/Loader/Loader"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"
import ImageModal from "./components/ImageModal/ImageModal"
import Modal from "react-modal";


function App() {
  
  const [request, setRequest] = useState("");
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  
  
  useEffect(() => {
    async function fetchPictures(request, page) {
      try {
        setError(false);
        setLoading(true);
        const res = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              client_id: 'kBZD0perGDKD-P6_maJxKM_T-LOxgtVx_QN7JlarIYc',
              page: page,
              per_page: 12,
              query: request,
            },
          }
        );
        if (page === 1) {
          setImages(res.data.results);
        } else {
          setImages((prevImages) => [
            ...prevImages,
            ...res.data.results,
          ]);
        }

        setPageLimit(res.data.total_pages);

        if (res.data.results.length === 0) {
          toast.error("Sorry, no matching results. Try again later.", {
            duration: 4000,
            position: "top-right",
          });
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
      
    }
    if (request) {
      fetchPictures(request, page);
    }
  }, [request, page]);

  

  

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);    
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }

  const handleSetRequest = newRequest => {
    setRequest(newRequest)
  };
  
  const loadMore = () => { setPage(prev => prev + 1) }

  return (
    <>
      <SearchBar
        handleSetRequest={handleSetRequest}
      />
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal}/>
      {images.length > 0 && !error && !loading && page < pageLimit && (
        <LoadMoreBtn loadMore={loadMore} />
      )}
      {loading && (
        <div >
          <Loader
            loading={loading}
          />
          {modalIsOpen && (
            <ImageModal
              isOpen={modalIsOpen}
              closeModal={closeModal}
              selectedImage={selectedImage}
            />
          )}
        </div>
      )}

      <Toaster />
    </>
  )
}

export default App
