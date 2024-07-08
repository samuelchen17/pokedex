import React, { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const ImgRetry = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retries, setRetries] = useState(0);
  const [currentSrc, setCurrentSrc] = useState(src);
  const maxRetries = 3;
  const retryInterval = 1000;

  useEffect(() => {
    const img = new Image();
    img.src = currentSrc;

    const handleLoad = () => {
      setLoading(false);
      setError(false);
    };

    const handleError = () => {
      if (retries < maxRetries) {
        setTimeout(() => {
          setRetries(retries + 1);
          setCurrentSrc(`${src}?retry=${retries + 1}`);
        }, retryInterval);
      } else {
        setLoading(false);
        setError(true);
      }
    };

    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [currentSrc, retries, maxRetries, retryInterval, src]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <PuffLoader color="#ff0000" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center">
        Image failed to load
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

export default ImgRetry;
