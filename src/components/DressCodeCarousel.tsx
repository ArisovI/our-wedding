import { useRef, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import "./DressCodeCarousel.css";

const DressCodeCarousel = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const slides = [
    { id: "women-1", src: "/dress-code/women-1.png", title: t.dressWomenTitle },
    { id: "women-2", src: "/dress-code/women-2.png", title: t.dressWomenTitle },
    { id: "men-1", src: "/dress-code/men-1.png", title: t.dressMenTitle },
    { id: "men-2", src: "/dress-code/men-2.png", title: t.dressMenTitle },
  ];

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(index + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  return (
    <div className="dress-carousel">
      <div
        className="dress-carousel__viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="dress-carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="dress-carousel__slide" key={slide.id}>
              <img
                className="dress-carousel__image"
                src={slide.src}
                alt={slide.title}
                loading="lazy"
              />
              <p className="dress-carousel__caption">{slide.title}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="dress-carousel__arrow dress-carousel__arrow--prev"
        onClick={() => goTo(index - 1)}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        type="button"
        className="dress-carousel__arrow dress-carousel__arrow--next"
        onClick={() => goTo(index + 1)}
        aria-label="Next"
      >
        ›
      </button>

      <div className="dress-carousel__dots">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className={`dress-carousel__dot${i === index ? " dress-carousel__dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={slide.title}
          />
        ))}
      </div>
    </div>
  );
};

export default DressCodeCarousel;
