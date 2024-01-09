export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  element = weakMap.get(endpoint) || 0;
  element++;
  if (element >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, element);
}
