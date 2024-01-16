import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './colorsCarrousel.css';

const ColorCarousel = ({ colores }) => {
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  return (
    <div className="color-carousel-container">
      <h1>Colores</h1>
      <AliceCarousel
        mouseTracking
        items={colores.map((color) => (
          <div
         
            key={color._id}
            className="carousel-item w-full"
            style={{ backgroundColor: color.codigo }}
            title={color.nombre}
            onDragStart={handleDragStart}
          ></div>
        ))}
        responsive={responsive}
        swipeExtraPadding={colores.length* 10} 

      />
    </div>
  );
};

export default ColorCarousel;
