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
  heroLead: string;
  countdownTitle: string;
  units: { days: string; hours: string; minutes: string; seconds: string };
  dateVenueTitle: string;
  venueName: string;
  mapLinkText: string;
  scheduleTitle: string;
  schedule: ScheduleItem[];
  dressTitle: string;
  dressText: string;
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
    heroLead:
      "С радостью в сердце приглашаем вас разделить с нами этот особенный день — день, когда мы станем одной семьёй.",
    countdownTitle: "До свадьбы осталось",
    units: { days: "дней", hours: "часов", minutes: "минут", seconds: "секунд" },
    dateVenueTitle: "Дата и место",
    venueName: "Sultan Saray Toyxanasi",
    mapLinkText: "Открыть на карте",
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
    heroLead:
      "Júrek tolı quwanısh penen, bizler bir shańaraqqa aylanatuǵın bul ayrıqsha kúndi siz benen bólisiwge shaqıramız.",
    countdownTitle: "Toyǵa shekem qaldı",
    units: { days: "kún", hours: "saat", minutes: "minut", seconds: "sekund" },
    dateVenueTitle: "Sáne hám orın",
    venueName: "Sultan Saray Toyxanasi",
    mapLinkText: "Kartada ashıw",
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
    giftsTitle: "Tilekler",
    giftsText:
      "Sizlerdiń qatnasıwı biz ushın eń qımbatlı sıylıq. Al basqa nárse menen quwantpaqshı bolsańız, jaqsı tilekler jazılǵan konvert órinli boladı.",
    footerText: "Súyispenshilik penen, Ilhambek hám Uldawlet",
  },
};
