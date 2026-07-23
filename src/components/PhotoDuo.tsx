import { useState } from "react";
import "./PhotoDuo.css";

const PhotoDuo = () => {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="photo-duo">
      {failed ? (
        <div className="photo-duo__placeholder" aria-hidden="true">
          <span className="photo-duo__placeholder-icon">❀</span>
        </div>
      ) : (
        <img
          className="photo-duo__image"
          src="/photos/couple.jpg"
          alt="Илхамбек & Улдаулет"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </figure>
  );
};

export default PhotoDuo;
