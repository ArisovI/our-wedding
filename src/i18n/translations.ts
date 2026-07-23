export interface ScheduleItem {
  time: string;
  title: string;
}

export interface Translation {
  tagline: string;
  namesDisplay: string;
  dateShort: string;
  openCta: string;
  greeting: string;
  photosTitle: string;
  calendarCaption: string;
  calendarWeekdays: string[];
  countdownTitle: string;
  units: { days: string; hours: string; minutes: string; seconds: string };
  dateVenueTitle: string;
  venueName: string;
  venueCity: string;
  mapYandexText: string;
  mapGoogleText: string;
  scheduleTitle: string;
  schedule: ScheduleItem[];
  dressTitle: string;
  dressText: string;
  dressWomenTitle: string;
  dressMenTitle: string;
  giftsTitle: string;
  giftsText: string;
  footerText: string;
}

export const translation: Translation = {
  tagline: "Приглашаем вас на свадьбу",
  namesDisplay: "Илхамбек & Улдаулет",
  dateShort: "1 августа 2026",
  openCta: "Открыть приглашение",
  greeting:
    "Дорогие родные и друзья! Спешим сообщить вам радостную новость — мы женимся! В этот особенный день мы очень хотим оказаться в окружении самых близких и родных для нас людей.",
  photosTitle: "Наша история",
  calendarCaption:
    "Не пропустите важное событие этого лета — день нашей свадьбы",
  calendarWeekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  countdownTitle: "До свадьбы осталось",
  units: { days: "дней", hours: "часов", minutes: "минут", seconds: "секунд" },
  dateVenueTitle: "Локация",
  venueName: "Ресторан «Sultan Saray»",
  venueCity: "г. Нукус",
  mapYandexText: "Яндекс Карты",
  mapGoogleText: "Google Карты",
  scheduleTitle: "Программа дня",
  schedule: [
    { time: "18:00", title: "Встреча гостей" },
    { time: "19:00", title: "Начало торжества" },
    { time: "19:30", title: "Поздравления и тёплые слова" },
    { time: "20:00", title: "Торт" },
    { time: "20:45", title: "Свадебный танец" },
    { time: "21:00", title: "Концертная программа" },
  ],
  dressTitle: "Дресс-код",
  dressText:
    "Нежные пастельные тона — розовый, пудровый, бежевый, айвори. Просим гостей воздержаться от белого цвета в наряде — он принадлежит невесте в этот день.",
  dressWomenTitle: "Женский образ",
  dressMenTitle: "Мужской образ",
  giftsTitle: "Пожелания",
  giftsText:
    "Ваше присутствие для нас — самый ценный подарок. Если же вы захотите порадовать нас чем-то ещё, конверт с добрыми пожеланиями будет как нельзя кстати.",
  footerText: "С любовью, Илхамбек и Улдаулет",
};
