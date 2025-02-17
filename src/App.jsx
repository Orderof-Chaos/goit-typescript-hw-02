import { useEffect, useState } from 'react'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Loader from "./components/Loader/Loader"

function App() {
  
  const [request, setRequest] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchPictures(request, page) {
      setLoading(true)
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              page,
              per_page: 15,
              query: request,
              client_id: "kBZD0perGDKD-P6_maJxKM_T-LOxgtVx_QN7JlarIYc",
            },
          }
        );
        if (response.data.results.length === 0) {
          toast.error("Sorry, we couldn't find a match for your request.", {
            duration: 3000,
            position: "top-right",
          });
        };
      } catch (error) {
        console.log("error");
        
      } finally {
        setLoading(false)
        console.log(response);
        
      }
    }
    if (request) {
      fetchPictures(request, page);
    }
  }, [request, page]);
  
  const handleSetRequest = newRequest => {
    console.log(newRequest);
    setRequest(newRequest)
  };
  
  return (
    <>
      <SearchBar
      />
      <ImageGallery />
      <Loader/>
      <Toaster />
    </>
  )
}

export default App
