import Image, { ImageProps } from 'next/image';
import { FC, memo } from 'react';

type Props = {
  blur?: boolean;
  imgClassName?: string;
};

const Img: FC<Props & ImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  quality,
  blur = false,
  imgClassName,
  ...props
}) => (
  <div className={className}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      className={imgClassName}
      sizes="(max-width: 768px) 100vw; (max-width: 1024px) 445px"
      loading={blur ? 'lazy' : 'eager'}
      {...props}
    />
  </div>
);

export default memo(Img);
