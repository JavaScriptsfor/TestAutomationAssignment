export function formatDayWithLeadingZero(day: any) {
  if (typeof day === 'number' && day >= 1 && day <= 31) {
    return day < 10 ? `0${day}` : String(day);
  }
  return day;
}