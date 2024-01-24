import { format, formatDistanceToNowStrict } from "date-fns";

/**
 *
 * @param {Array} date
 * @returns {String} distance from now
 */
export const distanceFromNow = (date = [2023, 9, 21]) => {
  return formatDistanceToNowStrict(new Date(...date), {
    includeSeconds: true,
    addSuffix: true,
  });
};

/**
 * find the last day of the month
 * @param {Number} month
 * @param {Number} year
 * @returns {String} formatted date
 */

export function getLastDayOfMonth(month, year) {
  const lastDay = new Date(year, month, 0);
  return lastDay.getDate();
}

/**
 * Find the current year
 * @returns {Number} current year
 */

export function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * @description format date dd/mm/yyyy
 * @param {Date} date
 * @returns {String} formatted date
 */

export function formatDate(date) {
  if (!date) return null;
  const formattedDate = format(new Date(date), "dd/MM/yyyy");
  return formattedDate;
}
