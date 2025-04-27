import React from "react";
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
import {respPhoto, respData} from './components/Types/types';


const App: React.FC = () => {
  
  const [request, setRequest] = useState("");
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState<respPhoto[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<respPhoto|null>(null);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  
  
  useEffect(() => {
    async function fetchPictures(request: string, page: number) {
      try {
        setError(false);
        setLoading(true);
        const res = await axios.get<respData>(
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
        if (page == 1) {
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
        setError(true);
      } finally {
        setLoading(false);
      }
      
    }
    if (request) {
      fetchPictures(request, page);
    }
  }, [request, page]);
  

  function openModal(image: respPhoto) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
    
    
  }

  const handleSetRequest = (newRequest: string) => {
    setRequest(newRequest)
    setPage(1)
  };
  
  const loadMore = () => { setPage(prev => prev + 1) }

  return (
    <div>
      <SearchBar
        handleSetRequest={handleSetRequest}
      />
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal}/>
      {images.length > 0 && !error && !loading && page < pageLimit && (
        <LoadMoreBtn loadMore={loadMore} />
      )}
      {loading && (
        <div>
          <Loader
            loading={loading}
          />
          
        </div>
      )}
{modalIsOpen && (
            <ImageModal
              isOpen={modalIsOpen}
              closeModal={closeModal}
              selectedImage={selectedImage}
            />
          )}
      <Toaster />
    </div>
  )
}

export default App
