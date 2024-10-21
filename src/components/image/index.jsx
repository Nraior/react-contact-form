import React from "react";

const Image = ({ loadingFallback, onError, onLoad, style, ...props }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const handleImageError = (e) => {
    setIsLoading(false);
    onError?.(e);
    e.target.alt = props.alt ?? "Image failed to load";
  };

  const handleImageLoaded = (e) => {
    onLoad?.(e);
    setIsLoading(false);
  };

  const componentStyle = {
    ...style,
    position: isLoading ? "absolute" : "initial",
    visibility: isLoading ? "hidden" : "visible",
  };

  return (
    <>
      {isLoading && loadingFallback}
      <img
        onError={handleImageError}
        onLoad={handleImageLoaded}
        style={componentStyle}
        {...props}
      />
    </>
  );
};

export default Image;
