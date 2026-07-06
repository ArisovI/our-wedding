import Countdown from "./Countdown";
import Reveal from "./Reveal";
import WeddingCalendar from "./WeddingCalendar";
import VenueIllustration from "./VenueIllustration";
import SectionDivider from "./SectionDivider";
import DressCodeCarousel from "./DressCodeCarousel";
import { useLanguage } from "../i18n/useLanguage";
import { buildWeddingIcs, downloadIcs } from "./calendar-ics";
import "./Invitation.css";

const YANDEX_MAP_URL =
  "https://yandex.uz/maps/org/sultan_saray_toyxanasi/195091240855/?ll=59.611947%2C42.461516&z=17";
const GOOGLE_MAP_URL = "https://www.google.com/maps/search/?api=1&query=42.461516,59.611947";

const Invitation = () => {
  const { t } = useLanguage();

  const handleAddToCalendar = () => {
    const ics = buildWeddingIcs({
      title: t.namesDisplay,
      description: t.tagline,
      location: `${t.venueName}, ${t.venueCity}`,
      start: new Date("2026-08-01T17:00:00+05:00"),
      end: new Date("2026-08-01T23:00:00+05:00"),
    });
    downloadIcs("wedding-invitation.ics", ics);
  };

  return (
    <main className="invitation">
      <Reveal>
        <section className="invitation__section invitation__hero">
          <p className="invitation__eyebrow">{t.tagline}</p>
          <h1 className="invitation__names">{t.namesDisplay}</h1>
        </section>
      </Reveal>

      <SectionDivider />

      <Reveal>
        <section className="invitation__section">
          <p className="invitation__greeting">{t.greeting}</p>
        </section>
      </Reveal>

      <SectionDivider />

      <Reveal>
        <section className="invitation__section">
          <p className="invitation__date">{t.dateShort}</p>
          <WeddingCalendar />
          <p className="invitation__calendar-caption">{t.calendarCaption}</p>
        </section>
      </Reveal>

      <SectionDivider />

      <Reveal>
        <section className="invitation__section">
          <h2 className="invitation__section-title">{t.countdownTitle}</h2>
          <Countdown />
          <button
            type="button"
            className="invitation__calendar-btn"
            onClick={handleAddToCalendar}
          >
            {t.addToCalendarText}
          </button>
        </section>
      </Reveal>

      <SectionDivider />

      <Reveal>
        <section className="invitation__section">
          <h2 className="invitation__section-title">{t.dateVenueTitle}</h2>
          <VenueIllustration />
          <p className="invitation__venue-name">{t.venueName}</p>
          <p className="invitation__venue-city">{t.venueCity}</p>
          <div className="invitation__map-links">
            <a
              className="invitation__map-link"
              href={YANDEX_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.mapYandexText}
            </a>
            <a
              className="invitation__map-link"
              href={GOOGLE_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.mapGoogleText}
            </a>
          </div>
        </section>
      </Reveal>

      <SectionDivider />

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

      <SectionDivider />

      <Reveal>
        <section className="invitation__section">
          <h2 className="invitation__section-title">{t.dressTitle}</h2>
          <p className="invitation__text">{t.dressText}</p>
          <DressCodeCarousel />
        </section>
      </Reveal>

      <SectionDivider />

      <Reveal>
        <section className="invitation__section">
          <h2 className="invitation__section-title">{t.giftsTitle}</h2>
          <p className="invitation__text">{t.giftsText}</p>
        </section>
      </Reveal>

      <SectionDivider />

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
