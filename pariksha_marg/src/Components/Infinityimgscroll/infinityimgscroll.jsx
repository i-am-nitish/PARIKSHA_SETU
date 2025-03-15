import React, { useEffect, useRef } from 'react';

const InfinityImgScroll = () => {
  const scrollRef = useRef(null);
  
  // Online images from Picsum Photos
  const images = [
    './infinityimages/air_authority.png',  // Dog
    './infinityimages/airforce.png',   // Book
    './infinityimages/bsf.png',   // Building
    './infinityimages/csir.png',   // Waterfall
    './infinityimages/delhimetro.png',   // Lake
    './infinityimages/railways.png',   // Mountain
    './infinityimages/uppolice.png',   // Flowers
    './infinityimages/upsc.png',   // Beach
  ];

  useEffect(() => {
    const scrollTrack = scrollRef.current;
    let animationId;
    let scrollPos = 0;
    
    const scroll = () => {
      // Increment scroll position
      scrollPos += 1.5;
      
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
    <div className="w-full">
      <h2 className="text-center text-2xl font-semibold mb-4  md:text-3xl  dark:text-black">SUPPORTED EXAMS</h2>
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
                    className="w-25 h-25 object-cover "
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