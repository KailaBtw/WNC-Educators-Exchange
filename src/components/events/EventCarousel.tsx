import { useState } from "react";

export type CarouselSlide = {
  src: string;
  alt: string;
  caption?: string;
  subtitle?: string;
};

type Props = {
  slides: CarouselSlide[];
  heading?: string;
  body?: string;
};

export default function EventCarousel({
  slides,
  heading = "Moments from the exchange",
  body = "Photos from Brain Hub, January, and upcoming convenings will live here. Placeholders mark the layout until archives are uploaded.",
}: Props) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const current = slides[index] ?? slides[0];
  const nextSlide = slides[(index + 1) % total];

  if (!current) return null;

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }

  function next() {
    setIndex((i) => (i + 1) % total);
  }

  return (
    <div className="carousel">
      <div className="carousel__copy">
        <h2>{heading}</h2>
        <p>{body}</p>
      </div>
      <div className="carousel__stage">
        <article className="carousel__card">
          <img src={current.src} alt={current.alt} />
          <div className="carousel__caption">
            <h3>{current.caption ?? "Event photo"}</h3>
            <p>{current.subtitle ?? "Replace with archive image"}</p>
          </div>
        </article>
        {nextSlide && (
          <div className="carousel__peek" aria-hidden="true">
            <img src={nextSlide.src} alt="" />
          </div>
        )}
        <div className="carousel__nav">
          <button type="button" onClick={prev} aria-label="Previous slide">
            ←
          </button>
          <button type="button" onClick={next} aria-label="Next slide">
            →
          </button>
          <span>
            {index + 1} / {total}
          </span>
        </div>
      </div>
      <style>{`
        .carousel {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.2fr);
          gap: 2rem;
          align-items: center;
          background:
            radial-gradient(circle at 90% 10%, color-mix(in srgb, var(--green-light) 35%, transparent), transparent 40%),
            linear-gradient(160deg, color-mix(in srgb, var(--purple) 92%, #1a2e24), color-mix(in srgb, var(--green) 55%, var(--purple)));
          color: #fff;
          border-radius: 1.75rem;
          padding: clamp(1.5rem, 4vw, 2.75rem);
          overflow: hidden;
        }
        .carousel__copy h2 {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          margin-bottom: 0.85rem;
        }
        .carousel__copy h2 em,
        .carousel__copy h2 i {
          font-style: italic;
          color: var(--green-light);
          text-decoration: underline;
          text-decoration-color: var(--green-light);
          text-underline-offset: 0.15em;
        }
        .carousel__copy p {
          color: color-mix(in srgb, #fff 88%, transparent);
          max-width: 32rem;
        }
        .carousel__stage {
          position: relative;
          min-height: 22rem;
        }
        .carousel__card {
          width: min(100%, 22rem);
          background: #fff;
          border-radius: 0.35rem;
          overflow: hidden;
          color: var(--ink);
          box-shadow: 0 18px 40px color-mix(in srgb, #000 25%, transparent);
          transition: transform 0.35s ease;
        }
        .carousel__card img {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
        }
        .carousel__caption {
          padding: 1rem 1.1rem 1.2rem;
        }
        .carousel__caption h3 {
          font-family: var(--font-display);
          color: var(--blue);
          font-size: 1.25rem;
          margin-bottom: 0.35rem;
        }
        .carousel__caption p {
          color: var(--muted);
          font-size: 0.92rem;
        }
        .carousel__peek {
          position: absolute;
          top: 1.5rem;
          right: -2.5rem;
          width: 9rem;
          height: 14rem;
          border-radius: 0.35rem;
          overflow: hidden;
          opacity: 0.75;
          border: 4px solid #fff;
        }
        .carousel__peek img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .carousel__nav {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-top: 1.25rem;
          color: #fff;
        }
        .carousel__nav button {
          width: 2.4rem;
          height: 2.4rem;
          border: 1px solid color-mix(in srgb, #fff 55%, transparent);
          background: transparent;
          color: #fff;
          cursor: pointer;
        }
        .carousel__nav button:hover {
          background: color-mix(in srgb, #fff 12%, transparent);
        }
        .carousel__nav span {
          margin-left: 0.35rem;
          font-size: 0.9rem;
          letter-spacing: 0.06em;
        }
        @media (max-width: 900px) {
          .carousel {
            grid-template-columns: 1fr;
          }
          .carousel__peek {
            display: none;
          }
          .carousel__card {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
