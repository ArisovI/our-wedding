import { useLanguage } from "../i18n/useLanguage";
import "./WeddingCalendar.css";

const YEAR = 2026;
const MONTH_INDEX = 7; // August
const WEDDING_DAY = 1;

const getMondayFirstWeekday = (date: Date) => (date.getDay() + 6) % 7;

const buildCalendarCells = () => {
  const daysInMonth = new Date(YEAR, MONTH_INDEX + 1, 0).getDate();
  const firstWeekday = getMondayFirstWeekday(new Date(YEAR, MONTH_INDEX, 1));

  const cells: (number | null)[] = Array(firstWeekday).fill(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day);
  }
  return cells;
};

const cells = buildCalendarCells();

const WeddingCalendar = () => {
  const { t } = useLanguage();

  return (
    <div className="wedding-calendar">
      <div className="wedding-calendar__weekdays">
        {t.calendarWeekdays.map((day) => (
          <span key={day} className="wedding-calendar__weekday">
            {day}
          </span>
        ))}
      </div>
      <div className="wedding-calendar__grid">
        {cells.map((day, index) => (
          <span
            key={index}
            className={`wedding-calendar__cell${
              day === WEDDING_DAY ? " wedding-calendar__cell--marked" : ""
            }${day === null ? " wedding-calendar__cell--empty" : ""}`}
          >
            {day ?? ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WeddingCalendar;
