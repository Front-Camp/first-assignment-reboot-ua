/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  const limit = length > 0 ? length - replacer.length : str.length - replacer.length;

  return str.length > length ? str.substring(0, limit) + replacer : str;
};

export default truncate;
