"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  Play,
  Pause,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { photoCarousel } from "@/data/electrician-data";

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photoCarousel.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photoCarousel.length);
  };

  const prevPhoto = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + photoCarousel.length) % photoCarousel.length
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    setIsAutoPlaying(false);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-mest-gray-1 overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c9784_0.5px,transparent_0.5px),linear-gradient(to_bottom,#0c9784_0.5px,transparent_0.5px)] bg-size-[100px_100px]" />
      </div>

      {/* Decorative Glow */}
      <div
        className="absolute top-20 left-10 w-96 h-96 bg-mest-teal-6/10 dark:bg-mest-teal-7/10 rounded-full blur-3xl opacity-50 animate-pulse"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-mest-teal-6/10 dark:bg-mest-teal-7/10 border border-mest-teal-6/30 dark:border-mest-teal-7/30 rounded-full px-4 py-1.5 mb-6 shadow-[0_0_20px_rgba(12,151,132,0.2)]">
            <Camera className="w-4 h-4 text-mest-teal-6 dark:text-mest-teal-7" />
            <span className="text-sm font-medium text-mest-teal-6 dark:text-mest-teal-7">
              Gallery
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-mest-gray-10">
            See Us{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-mest-teal-6 via-mest-amber-6 to-mest-blue-6 dark:from-mest-teal-7 dark:via-mest-amber-7 dark:to-mest-blue-7 drop-shadow-[0_0_30px_rgba(12,151,132,0.3)]">
                in Action
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-mest-teal-6 via-mest-amber-6 to-mest-blue-6 dark:from-mest-teal-7 dark:via-mest-amber-7 dark:to-mest-blue-7 rounded-full shadow-[0_0_10px_rgba(12,151,132,0.5)]" />
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-mest-gray-9 max-w-3xl mx-auto">
            Behind the scenes with our{" "}
            <span className="text-mest-teal-6 dark:text-mest-teal-7 font-semibold">
              professional team
            </span>
          </p>
        </div>

        {/* Main Carousel */}
        <div
          className="max-w-5xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative group">
            {/* Main Image Container */}
            <div
              className="relative h-64 sm:h-96 lg:h-[500px] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={openLightbox}
            >
              {/* Image */}
              <Image
                src={photoCarousel[currentIndex].image}
                alt={photoCarousel[currentIndex].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority={currentIndex === 0}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 mb-3">
                  <span className="w-2 h-2 bg-mest-teal-6 rounded-full animate-pulse" />
                  <span className="text-xs font-medium">
                    {currentIndex + 1} / {photoCarousel.length}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                  {photoCarousel[currentIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300">
                  {photoCarousel[currentIndex].description}
                </p>
              </div>

              {/* Expand Indicator */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-mest-gray-2/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-full"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-mest-gray-2/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-full"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Play/Pause Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                toggleAutoPlay();
              }}
              className="absolute top-4 left-4 bg-white/90 dark:bg-mest-gray-2/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 rounded-full"
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-4  mt-6 overflow-x-auto pb-4 scrollbar-hide">
            {photoCarousel.map((photo, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-4 ring-mest-teal-6 dark:ring-mest-teal-7 scale-110"
                    : "ring-2 ring-slate-300 dark:ring-mest-gray-6 hover:ring-mest-teal-6/50 dark:hover:ring-mest-teal-7/50 opacity-70 hover:opacity-100"
                }`}
                aria-label={`View ${photo.title}`}
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-mest-teal-6/20 dark:bg-mest-teal-7/20" />
                )}
              </button>
            ))}
          </div>

          {/* Dot Indicators (Mobile) */}
          <div className="flex justify-center mt-6 gap-2 sm:hidden">
            {photoCarousel.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-mest-teal-6 dark:bg-mest-teal-7 w-6"
                    : "bg-slate-300 dark:bg-mest-gray-6"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Navigation in Lightbox */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Lightbox Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photoCarousel[currentIndex].image}
              alt={photoCarousel[currentIndex].title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Lightbox Caption */}
          <div className="absolute bottom-4 left-4 right-4 text-center text-white">
            <p className="text-sm text-slate-300 mb-2">
              {currentIndex + 1} / {photoCarousel.length}
            </p>
            <h3 className="text-xl font-bold mb-1">
              {photoCarousel[currentIndex].title}
            </h3>
            <p className="text-sm text-slate-400">
              {photoCarousel[currentIndex].description}
            </p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
