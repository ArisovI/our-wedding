export type Lang = "ru" | "kaa";

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

// NOTE: The "kaa" (Qaraqalpaq) translation is an AI-generated draft.
// Karakalpak is a lower-resource language for machine translation —
// please have a native speaker review wording, grammar and the
// Ǵ/Ń/Ó/Ú letters before publishing.
export const translations: Record<Lang, Translation> = {
  ru: {
    tagline: "Приглашаем вас на свадьбу",
    namesDisplay: "Илхамбек & Улдаулет",
    dateShort: "1 августа 2026",
    openCta: "Открыть приглашение",
    greeting:
      "Дорогие родные и друзья! Спешим сообщить вам радостную новость — мы женимся! В этот особенный день мы очень хотим оказаться в окружении самых близких и родных для нас людей.",
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
      { time: "17:00", title: "Сбор гостей" },
      { time: "17:30", title: "Церемония никах" },
      { time: "18:00", title: "Начало торжественного банкета" },
      { time: "19:00", title: "Поздравления и тосты" },
      { time: "20:00", title: "Праздничный торт" },
      { time: "20:30", title: "Танцы и музыка до конца вечера" },
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
  },
  kaa: {
    tagline: "Toyǵa shaqıramız",
    namesDisplay: "Ilhambek & Uldawlet",
    dateShort: "2026-jılı 1-avgust",
    openCta: "Shaqırıwdı ashıw",
    greeting:
      "Qádirli aqın-tuwısqanlar hám doslar! Quwanıshlı xabardı sizler menen bólisemiz — biz úylenemiz! Bul ayrıqsha kúni eń jaqın hám qádirli adamlarımız benen bolıwdı qattı qáleymiz.",
    calendarCaption:
      "Bul jazdıń eń dıqqatqa ılayıq waqıyasın — toy kúnimizdi — qaldırmań",
    calendarWeekdays: ["Ds", "Sş", "Sr", "Pş", "Jm", "Şb", "Jk"],
    countdownTitle: "Toyǵa shekem qaldı",
    units: { days: "kún", hours: "saat", minutes: "minut", seconds: "sekund" },
    dateVenueTitle: "Orın",
    venueName: "«Sultan Saray» restoranı",
    venueCity: "Nókis qalası",
    mapYandexText: "Yandex Karta",
    mapGoogleText: "Google Karta",
    scheduleTitle: "Kúnniń baǵdarlaması",
    schedule: [
      { time: "17:00", title: "Meymanlardıń jıynalıwı" },
      { time: "17:30", title: "Nikah máresimi" },
      { time: "18:00", title: "Saltanatlı dástúrxannıń baslanıwı" },
      { time: "19:00", title: "Qutlıqlawlar hám tostlar" },
      { time: "20:00", title: "Toy tortı" },
      { time: "20:30", title: "Bii hám muzıka keshtiń aqırına shekem" },
    ],
    dressTitle: "Kiyim kodı",
    dressText:
      "Jumsaq pastel túsler — gúlreń, pudra, bej hám ayvori. Meymanlardan aq túsli kiyimnen saqlanıwın soraymız — bul kúni ol kelinshekke tiyisli.",
    dressWomenTitle: "Áyeller ushın kiyim",
    dressMenTitle: "Erkekler ushın kiyim",
    giftsTitle: "Tilekler",
    giftsText:
      "Sizlerdiń qatnasıwı biz ushın eń qımbatlı sıylıq. Al basqa nárse menen quwantpaqshı bolsańız, jaqsı tilekler jazılǵan konvert órinli boladı.",
    footerText: "Súyispenshilik penen, Ilhambek hám Uldawlet",
  },
};
