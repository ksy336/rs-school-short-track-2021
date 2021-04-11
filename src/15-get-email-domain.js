/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const newStr = email.lastIndexOf('@');
  const res = email.slice(newStr + 1);
  return res;
}

module.exports = getEmailDomain;
