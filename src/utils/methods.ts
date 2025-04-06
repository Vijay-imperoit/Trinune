import moment, { Moment } from 'moment';
const Method = {
  convertDateToDDMMYYYY: (date: string) => {
    return moment(date).local().format('DD/MM/YYYY ');
  },
  convertDateToDDMMYYYYHHMM: (date: string) => {
    return moment(date).local().format('DD/MM/YYYY hh:mm ');
  },
  convertDateToDDMMYYYYHHMMAMPM: (date: string) => {
    return moment(date).local().format('DD/MM/YYYY hh:mm A');
  },
  convertDateToDDMMYYYYHOURS: (date: string) => {
    return moment(date).local().format('DD/MM/YYYY [,] HH:mm ');
  },
  checkisSameOrAfter: (date1: string, date2: string) => {
    return moment(date2).isSameOrAfter(date1);
  },
  convertDateToFormat: (date: any, format: string) => {
    return moment(date).local().format(format);
  },
  dayDifference: (date1: string, date2: string) => {
    return moment(date2).diff(date1, 'days');
  },
  extractTimeAMPM: (date: Date | Moment | null): string => {
    if (date === null) {
      return '';
    }
    return moment.utc(date).format('hh:mm A');
  },
  getNameCharacter: (name: string) => {
    if (!name || name.length === 0) return '';
    name = name.toUpperCase();
    const [firstName, lastName] = name.split(' ');
    let chars = '';
    if (firstName) chars += firstName[0];
    if (lastName) chars += lastName[0];
    return chars;
  },
  formatMinutesToHours: (minutes: any) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}min`;
  },
  convertTo12Hour(timeSlot1: any, timeSlot2: any) {
    function formatTime(timeStr: any) {
      let [hours] = timeStr.split(':').map(Number);
      let period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      return `${hours} ${period}`;
    }
    const startTime = formatTime(timeSlot1);
    const endTime = formatTime(timeSlot2);
    return `${startTime} - ${endTime}`;
  },
  convertSecondsToTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    const formattedMinutes = String(mins).padStart(2, '0');
    const formattedSeconds = String(secs).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  },
  getEndDateOfMonth(startDate: any) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);

    return date;
  },
};
export default Method;
