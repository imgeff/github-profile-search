export function formatDateToDefaultBrazil(date) {
  const dateToArray = date.split('-');
  const year = dateToArray[0];
  const month = dateToArray[1];
  const day = dateToArray[2].slice(0, 2);
  const dateFormated = `${day}/${month}/${year}`;
  return dateFormated;
}
