import React, { useEffect, useRef } from 'react';

const InfinityImgScroll = () => {
  const scrollRef = useRef(null);
  
  // Online images from Picsum Photos
  const images = [
    './infinityimages/air_authority.png',  // Dog
    './infinityimages/airforce.jpeg',   // Book
    './infinityimages/bsf.jpeg',   // Building
    './infinityimages/csir.png',   // Waterfall
    './infinityimages/delhimetro.png',   // Lake
    './infinityimages/railways.jpeg',   // Mountain
    './infinityimages/uppolice.jpeg',   // Flowers
    './infinityimages/upsc.jpeg',   // Beach
  ];

  useEffect(() => {
    const scrollTrack = scrollRef.current;
    let animationId;
    let scrollPos = 0;
    
    const scroll = () => {
      // Increment scroll position
      scrollPos += 2.0;
      
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
            <div key={`copy-${copyIndex}`} className="flex gap-0 px-2 flex-none">
              {images.map((imgSrc, imgIndex) => (
                <div 
                  key={`img-${copyIndex}-${imgIndex}`} 
                  className="flex-none w-[200px] h-[150px]"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Scrolling image ${imgIndex + 1}`}
                    loading="lazy"
                    className="w-30 h-30 object-cover "
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