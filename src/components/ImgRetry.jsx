import React, { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const ImgRetry = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (imgError && retryCount < 3) {
      const retryTimer = setTimeout(() => {
        setLoading(true);
        setImgError(false);
        setRetryCount(retryCount + 1);
      }, 2000);

      return () => clearTimeout(retryTimer);
    }
  }, [imgError, retryCount]);

  const handleImageLoad = () => {
    setLoading(false);
    setImgError(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setImgError(true);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {loading ? (
        <PuffLoader color="#ff0000" />
      ) : imgError ? (
        <span>Image not available</span>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ImgRetry;
