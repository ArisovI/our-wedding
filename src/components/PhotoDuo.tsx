import { useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import "./PhotoDuo.css";

interface PhotoSlot {
  src: string;
  caption: string;
  variant: "then" | "now";
}

const PhotoCard = ({ src, caption, variant }: PhotoSlot) => {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`photo-duo__item photo-duo__item--${variant}`}>
      {failed ? (
        <div className="photo-duo__placeholder" aria-hidden="true">
          <span className="photo-duo__placeholder-icon">❀</span>
        </div>
      ) : (
        <img
          className="photo-duo__image"
          src={src}
          alt={caption}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      <figcaption className="photo-duo__caption">{caption}</figcaption>
    </figure>
  );
};

const PhotoDuo = () => {
  const { t } = useLanguage();

  const slots: PhotoSlot[] = [
    { src: "/photos/childhood.jpg", caption: t.photoThenCaption, variant: "then" },
    { src: "/photos/couple.jpg", caption: t.photoNowCaption, variant: "now" },
  ];

  return (
    <div className="photo-duo">
      {slots.map((slot) => (
        <PhotoCard key={slot.src} {...slot} />
      ))}
    </div>
  );
};

export default PhotoDuo;
