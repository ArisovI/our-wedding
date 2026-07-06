const pad = (n: number) => String(n).padStart(2, "0");

const toIcsDate = (date: Date) =>
  `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(
    date.getUTCHours(),
  )}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`;

const escapeIcsText = (text: string) =>
  text.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");

interface IcsEventOptions {
  title: string;
  description: string;
  location: string;
  start: Date;
  end: Date;
}

export const buildWeddingIcs = ({ title, description, location, start, end }: IcsEventOptions) => {
  const now = toIcsDate(new Date());
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//love-story//wedding-invitation//RU",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:wedding-${start.getTime()}@love-story`,
    `DTSTAMP:${now}`,
    `DTSTART:${toIcsDate(start)}`,
    `DTEND:${toIcsDate(end)}`,
    `SUMMARY:${escapeIcsText(title)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(location)}`,
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder",
    "TRIGGER:-P1D",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
};

export const downloadIcs = (filename: string, icsContent: string) => {
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
