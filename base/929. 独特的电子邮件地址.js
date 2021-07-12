/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const emailList = new Set();
  emails.forEach(item => {
    let tempArr = item.split('@')
    const local = tempArr[0].split('+')[0].replace(/\./g, '')
    emailList.add(local + '@' + tempArr[1])
  })
  return [...emailList].length
};