
export const getAvatarText = (input) => {
  let commonWords = /and|or|for|the|but|etc|/g;
  if (input) {
    let cleanName = input.replace(commonWords, '').replace(/\d/g, '').replace(/\s{2,}/g, ' ');
    let initails = cleanName.split(' ');
    return initails[0][0] + (initails[1] ? initails[1][0] : "");
  }
}