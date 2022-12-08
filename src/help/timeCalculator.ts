interface Time {
  stringResult: string;
  numberResult: number;
}
interface TimeCalculatorProps {
  time: string;
  sections: number;
  breaks: string;
}
const timeCalculator = ({
  time,
  sections,
  breaks,
}: TimeCalculatorProps): Time => {
  function toTimestamp(horario: string): number {
    const aux = horario.split(':');

    const dt = new Date();
    dt.setHours(Number(aux[0]));
    dt.setMinutes(Number(aux[1]));
    dt.setSeconds(Number(aux[2]));
    return dt.getTime();
  }
  const received_breaks = breaks.split(':');
  const minutosAdd = Number(received_breaks[1]) * sections * 1000;

  function moreSectionsTime(hora: string): string {
    const timeHoraFinal = toTimestamp(hora) + minutosAdd;
    const dt = new Date(timeHoraFinal);

    const hour = String(
      dt.getHours() < 10 ? `0${dt.getHours()}` : String(dt.getHours()),
    );
    const minutes = String(
      dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : String(dt.getMinutes()),
    );
    const seconds = String(
      dt.getSeconds() < 10 ? `0${dt.getSeconds()}` : String(dt.getSeconds()),
    );
    return String(hour + minutes + seconds);
  }
  function convertToStringTime(hour: string): string {
    const myFunc = (num: String): String => String(num);

    const arr = Array.from(String(hour), myFunc);
    arr.splice(2, 0, ':');
    arr.splice(5, 0, ':');

    return arr.join('');
  }
  function convertToNumberTime(hour: string): string {
    const myFunc = (num: String): String => String(num);

    const arr = Array.from(String(hour), myFunc);
    arr.splice(2, 0, ':');
    arr.splice(5, 0, ':');

    return Number(arr.join(''));
  }
  return {
    stringResult: convertToStringTime(moreSectionsTime(time)),
    numberResult: convertToNumberTime(moreSectionsTime(time)),
  };
};
