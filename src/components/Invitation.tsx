import Countdown from "./Countdown";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/useLanguage";
import "./Invitation.css";

const MAP_URL =
  "https://yandex.uz/maps/org/sultan_saray_toyxanasi/195091240855/?ll=59.611947%2C42.461516&z=17";

const Invitation = () => {
  const { t } = useLanguage();

  return (
    <main className="invitation">
      <Reveal>
        <section className="invitation__section invitation__hero">
          <p className="invitation__eyebrow">{t.tagline}</p>
          <h1 className="invitation__names">{t.namesDisplay}</h1>
          <p className="invitation__lead">{t.heroLead}</p>
        </section>
      </Reveal>

      <Reveal>
        <section className="invitation__section">
          <h2 className="invitation__section-title">{t.countdownTitle}</h2>
          <Countdown />
        </section>
      </Reveal>

      <Reveal>
        <section className="invitation__section">
          <h2 className="invitation__section-title">{t.dateVenueTitle}</h2>
          <p className="invitation__date">{t.dateShort}</p>
          <p className="invitation__venue-name">{t.venueName}</p>
          <a
            className="invitation__map-link"
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.mapLinkText}
          </a>
        </section>
      </Reveal>

      <Reveal>
        <section className="invitation__section">
          <h2 className="invitation__section-title">{t.scheduleTitle}</h2>
          <ul className="invitation__schedule">
            {t.schedule.map((item) => (
              <li className="invitation__schedule-item" key={item.time}>
                <span className="invitation__schedule-time">{item.time}</span>
                <span className="invitation__schedule-title">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section className="invitation__section">
          <h2 className="invitation__section-title">{t.dressTitle}</h2>
          <p className="invitation__text">{t.dressText}</p>
        </section>
      </Reveal>

      <Reveal>
        <section className="invitation__section">
          <h2 className="invitation__section-title">{t.giftsTitle}</h2>
          <p className="invitation__text">{t.giftsText}</p>
        </section>
      </Reveal>

      <Reveal>
        <footer className="invitation__footer">
          <p className="invitation__footer-ornament" aria-hidden="true">
            ❀
          </p>
          <p className="invitation__footer-text">{t.footerText}</p>
        </footer>
      </Reveal>
    </main>
  );
};

export default Invitation;
