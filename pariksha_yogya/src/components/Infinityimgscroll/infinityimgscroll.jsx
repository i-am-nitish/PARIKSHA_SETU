import React, { useEffect, useRef } from 'react';

const InfinityImgScroll = () => {
  const scrollRef = useRef(null);
  
  // Online images from Picsum Photos
  const images = [
    'https://picsum.photos/id/237/300/200',  // Dog
    'https://picsum.photos/id/24/300/200',   // Book
    'https://picsum.photos/id/36/300/200',   // Building
    'https://picsum.photos/id/42/300/200',   // Waterfall
    'https://picsum.photos/id/58/300/200',   // Lake
    'https://picsum.photos/id/65/300/200',   // Mountain
    'https://picsum.photos/id/76/300/200',   // Flowers
    'https://picsum.photos/id/90/300/200',   // Beach
    'https://picsum.photos/id/106/300/200',  // Sunset
    'https://picsum.photos/id/119/300/200',  // City
  ];

  useEffect(() => {
    const scrollTrack = scrollRef.current;
    let animationId;
    let scrollPos = 0;
    
    const scroll = () => {
      // Increment scroll position
      scrollPos += 0.5;
      
      // Reset scroll position when one set of images is scrolled through
      if (scrollPos >= scrollTrack.firstChild.offsetWidth) {
        scrollPos = 0;
      }
      
      // Apply the scroll position
      scrollTrack.style.transform = `translateX(-${scrollPos}px)`;
      
      animationId = requestAnimationFrame(scroll);
    };
    
    scroll();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full py-5">
      <div className="w-full overflow-hidden relative">
        <div 
          ref={scrollRef} 
          className="flex whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          {/* Create multiple copies of images for seamless looping */}
          {[...Array(3)].map((_, copyIndex) => (
            <div key={`copy-${copyIndex}`} className="flex gap-10 px-2 flex-none">
              {images.map((imgSrc, imgIndex) => (
                <div 
                  key={`img-${copyIndex}-${imgIndex}`} 
                  className="flex-none w-[200px] h-[150px]"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Scrolling image ${imgIndex + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfinityImgScroll;