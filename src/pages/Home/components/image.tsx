import React from 'react';
import { Img } from 'react-image';

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const MaImage: React.FC<ImageProps> = ({ src, alt, width, height }) => {
  return (
    <div style={{ position: 'relative', width, height }}>
      <Img
        src={src}
        alt={alt}
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        loader={<div>Loading...</div>}
      />
    </div>
  );
};

export default MaImage;