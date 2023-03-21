// Aktuelles Datum
function currentDay() {
  const date = new Date();
  const days = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];
  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dateString = `${dayOfWeek}, ${addLeadingZero(
    dayOfMonth
  )}. ${month} ${year}`;
  document.write(dateString + " ");
}

// Hilfsfunktion zum Hinzufügen von Nullen
function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

// Aktuelle Uhrzeit
function currentTime() {
  const date = new Date();
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.write(timeString);
}

// Zeit auf der Seite
let startTime = new Date();
function timeOnPage() {
  const now = new Date();
  const elapsedSeconds = Math.floor((now - startTime) / 1000);
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds - hours * 3600) / 60);
  const seconds = elapsedSeconds % 60;
  const timeString = `${addLeadingZero(hours)}:${addLeadingZero(
    minutes
  )}:${addLeadingZero(seconds)}`;
  alert(`Zeit auf der Seite: ${timeString}`);
}

// Seite neu laden
function refresh() {
  location.reload();
}
