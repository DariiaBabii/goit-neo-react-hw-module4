import { useState } from "react";
import useUnsplashApi from "./fetchData";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import ImageGallery from "./ImageGallery";
import LoadMoreBtn from "./LoadMoreButton";
import ImageModal from "./ImageModal";

import classes from "./App.module.css";

const App = () => {
  const { fetchPhotos, images, setImages, totalPages, loading } =
    useUnsplashApi();
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearchSubmit = async (newQuery) => {
    setQuery(newQuery);
    setCurrentPage(1);
    setImages([]);

    try {
      await fetchPhotos({ query: newQuery, page: 1 });
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);

    try {
      await fetchPhotos({ query, page: nextPage });
    } catch (error) {
      console.error("Error fetching more photos:", error);
    }
  };

  const handleModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />

      {query && (
        <h1 className={classes.title}>Image Search Results For `{query}`</h1>
      )}

      <ImageGallery images={images} query={query} handleModal={handleModal} />

      {loading && <Loader />}

      {images.length > 0 && !loading && currentPage < totalPages && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}

      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default App;
