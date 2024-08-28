import { FaSearch } from "react-icons/fa";

import ImageCard from "./ImageCard";
import classes from "./ImageGallery.module.css";

const ImageGallery = ({ images, query, handleModal }) => {
  if (!query) {
    return (
      <div className={classes["search-prompt"]}>
        <p className={classes.p}>Use search bar to find amazing images :)</p>
      </div>
    );
  }

  return images?.length > 0 ? (
    <ul className={classes["image-gallery"]}>
      {images.map(({ id, ...image }) => (
        <li key={id} className={classes["image-gallery-item"]}>
          <ImageCard image={image} handleModal={handleModal} />
        </li>
      ))}
    </ul>
  ) : (
    <p className={classes.p}>No images found for `{query}` :(</p>
  );
};

export default ImageGallery;
