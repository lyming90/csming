import dateFormat from 'dateformat';

export function formatDate(unformattedDate) {
  return dateFormat(unformattedDate, "mmmm dS, yyyy");
}