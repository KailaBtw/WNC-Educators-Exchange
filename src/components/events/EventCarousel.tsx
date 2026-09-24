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
  heading = "From past gatherings",
  body = "A growing archive of photos from Brain Hub, January, and regional Exchange days.",
}: Props) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const current = slides[index] ?? slides[0];

  if (!current) return null;

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }

  function next() {
    setIndex((i) => (i + 1) % total);
  }

  return (
    <div className="archive-carousel">
      <div className="archive-carousel__intro">
        <p className="archive-carousel__eyebrow">Photo archive</p>
        <h2>{heading}</h2>
        <p>{body}</p>
      </div>

      <div className="archive-carousel__frame">
        <div className="archive-carousel__media">
          <img key={current.src} src={current.src} alt={current.alt} />
          <div className="archive-carousel__caption">
            <strong>{current.caption ?? "Event photo"}</strong>
            {current.subtitle && <span>{current.subtitle}</span>}
          </div>
        </div>

        <div className="archive-carousel__controls">
          <button type="button" onClick={prev} aria-label="Previous photo">
            ←
          </button>
          <div className="archive-carousel__dots" role="tablist" aria-label="Slides">
            {slides.map((slide, i) => (
              <button
                key={`${slide.src}-${i}`}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show photo ${i + 1}`}
                className={i === index ? "is-active" : undefined}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button type="button" onClick={next} aria-label="Next photo">
            →
          </button>
          <span className="archive-carousel__count">
            {index + 1} / {total}
          </span>
        </div>

        <div className="archive-carousel__thumbs" aria-hidden="true">
          {slides.map((slide, i) => (
            <button
              key={`thumb-${slide.src}-${i}`}
              type="button"
              className={i === index ? "is-active" : undefined}
              onClick={() => setIndex(i)}
            >
              <img src={slide.src} alt="" />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .archive-carousel {
          display: grid;
          gap: 1.5rem;
        }
        .archive-carousel__eyebrow {
          margin: 0 0 0.35rem;
          color: var(--blue);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .archive-carousel__intro h2 {
          margin: 0 0 0.5rem;
          font-family: var(--font-display);
          font-size: clamp(1.7rem, 3vw, 2.25rem);
          color: var(--ink);
        }
        .archive-carousel__intro p:last-child {
          margin: 0;
          max-width: 36rem;
          color: var(--muted);
        }
        .archive-carousel__frame {
          display: grid;
          gap: 0.85rem;
          padding: clamp(0.85rem, 2vw, 1.15rem);
          border-radius: var(--radius-lg);
          background: color-mix(in srgb, var(--white) 75%, var(--cream));
          border: 1px solid color-mix(in srgb, var(--ink) 7%, transparent);
        }
        .archive-carousel__media {
          position: relative;
          overflow: hidden;
          border-radius: calc(var(--radius-lg) - 0.4rem);
          background: color-mix(in srgb, var(--green-light) 35%, white);
          aspect-ratio: 16 / 9;
          max-height: 28rem;
        }
        .archive-carousel__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .archive-carousel__caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          display: grid;
          gap: 0.15rem;
          padding: 1.1rem 1.15rem 1rem;
          background: linear-gradient(transparent, color-mix(in srgb, var(--ink) 72%, transparent));
          color: #fff;
        }
        .archive-carousel__caption strong {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
        }
        .archive-carousel__caption span {
          font-size: 0.88rem;
          opacity: 0.9;
        }
        .archive-carousel__controls {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }
        .archive-carousel__controls > button {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--ink) 14%, transparent);
          background: var(--white);
          color: var(--ink);
          cursor: pointer;
          font-size: 1rem;
        }
        .archive-carousel__controls > button:hover {
          border-color: color-mix(in srgb, var(--green) 45%, transparent);
          color: var(--green);
        }
        .archive-carousel__dots {
          display: flex;
          gap: 0.4rem;
          align-items: center;
        }
        .archive-carousel__dots button {
          width: 0.55rem;
          height: 0.55rem;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: color-mix(in srgb, var(--ink) 18%, transparent);
          cursor: pointer;
        }
        .archive-carousel__dots button.is-active {
          width: 1.15rem;
          background: var(--green);
        }
        .archive-carousel__count {
          margin-left: auto;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--muted);
        }
        .archive-carousel__thumbs {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(4.5rem, 1fr));
          gap: 0.45rem;
        }
        .archive-carousel__thumbs button {
          padding: 0;
          border: 2px solid transparent;
          border-radius: 0.55rem;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          cursor: pointer;
          background: color-mix(in srgb, var(--green-light) 30%, white);
        }
        .archive-carousel__thumbs button.is-active {
          border-color: var(--green);
        }
        .archive-carousel__thumbs img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 640px) {
          .archive-carousel__media {
            aspect-ratio: 4 / 3;
            max-height: none;
          }
          .archive-carousel__thumbs {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
}
