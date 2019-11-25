import React, { useState } from 'react';
import { cumulativeOffSet } from './../../pipes/filter';
import './ProductSlider.scss';

const ProductSlider = ({ images }) => {
  const imageRef = React.createRef();
  const [img, setImg] = useState(images[0]);
  const [aItem, setAItem] = useState(0);

  const handleImageChange = e => {
    const currentX = e.clientX - cumulativeOffSet(imageRef.current).left;

    const part = imageRef.current.clientWidth / images.length;

    let imgIndex = Math.ceil(currentX / part) - 1;
    if (imgIndex < 0) {
      imgIndex = 0;
    }

    if (imgIndex >= images.length) {
      imgIndex = images.length - 1;
    }
    setAItem(imgIndex);
    setImg(images[imgIndex]);
  };

  const handleMouseOut = e => {
    setImg(images[0]);
    setAItem(0);
  };

  const changeImage = i => {
    setImg(images[i]);
    setAItem(i);
  };

  return (
    <aside className="col-sm-5 border-right">
      <article className="gallery-wrap">
        <div className="img-big-wrap">
          <div style={{ padding: '2rem' }}>
            <a href="#">
              <img
                ref={imageRef}
                onMouseMove={handleImageChange}
                onMouseOut={handleMouseOut}
                src={img}
                alt={img}
                style={{ width: '100%', height: '100%' }}
              />
            </a>
          </div>
        </div>
        <div className="img-small-wrap">
          {images.map((img, i) => (
            <div
              key={i}
              className="item-gallery"
              onClick={() => {
                changeImage(i);
              }}
            >
              <img src={img} alt={img} />
            </div>
          ))}
        </div>
      </article>
    </aside>
  );
};

export default ProductSlider;
