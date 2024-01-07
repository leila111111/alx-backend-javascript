export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const step of array) {
    newArray.push(appendString + step);
  }

  return newArray;
}
