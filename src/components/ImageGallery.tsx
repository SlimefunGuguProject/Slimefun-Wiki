import React from "react";
import clsx from "clsx";

interface ImageData {
  src: string;
  alt: string;
  sizePercent?: number;
}

interface ImageGalleryProps {
  images: ImageData[];
}

function getSizePercent(sizePercent: number | undefined) {
  if (sizePercent && sizePercent > 0 && sizePercent <= 100) {
    return sizePercent;
  }
  return 100;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="image-gallery">
      { images.map((image, index) => (
        <div key={index} className="image">
          <img src={image.src} alt={image.alt} style={{ width: getSizePercent(image.sizePercent) + '%' }} />
          {image.alt && <p className="caption">{image.alt}</p>}
        </div>
      )) }
    </div>
  );
};

export default ImageGallery;
