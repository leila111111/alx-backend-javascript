export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }
  const setToArray = Array.from(set)
    .filter((element) => typeof element === 'string' && element.startsWith(startString))
    .map((element) => ele.slice(startString.length));

  return setToArray.join('-');
}
