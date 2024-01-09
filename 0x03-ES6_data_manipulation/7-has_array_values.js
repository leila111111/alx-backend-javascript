export default function hasValuesFromArray(set, array) {
  return array.every((elmnt) => set.has(elmnt));
}
