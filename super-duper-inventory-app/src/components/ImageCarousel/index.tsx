'use client';

import { ImageCarouselProps } from '@/types/ImageCarouselProps';
import React, { useState } from 'react';

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  if (images.length === 0) {
    return <div className="text-center text-gray-500">No images:(</div>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
      <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200">
        <img
          src={images[currentIndex]}
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
      </div>

      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 bg-opacity-50 text-white p-2 rounded-full"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 bg-opacity-50 text-white p-2 rounded-full"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-70'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
