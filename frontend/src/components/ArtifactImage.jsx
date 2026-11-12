import React, { useState } from 'react';
import { HeritageArtwork } from './HeritageArtwork';

export const ArtifactImage = ({
  src,
  alt = 'Heritage Record',
  recordType = '',
  category = '',
  tamilName = '',
  subCategory = '',
  className = 'w-full h-full object-cover',
  fallbackClassName = '',
  compact = false
}) => {
  const [failedSrc, setFailedSrc] = useState(null);
  const showArtwork = !src || failedSrc === src;

  if (showArtwork) {
    return (
      <HeritageArtwork
        recordType={recordType}
        category={category}
        title={alt}
        tamilName={tamilName}
        subCategory={subCategory}
        compact={compact}
        className={fallbackClassName || className}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailedSrc(src)}
      className={className}
    />
  );
};

export default ArtifactImage;
