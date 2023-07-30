/**
 * Generate random date by post id
 *
 * @param {number} id
 * @returns {string}
 */
export const generateDateById = (id?: number): string => {
  /**
   * Return empty string when the id is undefined
   */
  if (!id) {
    return "";
  }

  const startTime = new Date("2020-01-01").getTime(); // Getting start time
  const endTime = new Date().getTime(); // Getting end time (It's the current datetime)
  const date = new Date(startTime + (id / 100) * (endTime - startTime)); // Generate random date between two dates using post id

  /**
   * Formatting date to this pattern (July 23, 2023)
   */
  const dateFormat = `${date.toLocaleString("en", {
    month: "short",
  })} ${date.getDay()}, ${date.getFullYear()}`;

  return dateFormat;
};
