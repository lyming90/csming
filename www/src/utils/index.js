import dateFormat from 'dateformat';

export function formatDate(unformattedDate) {
  return dateFormat(unformattedDate, "mmmm dS, yyyy");
}

export function setTitle(prefix) {
    const postfix = "Ming \u00B7 刘明宇 \u00B7 Liu Mingyu";
    const newTitle = prefix + " \u00B7 " + postfix;
    return newTitle;
}