export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let elements = weakMap.get(endpoint) || 0;
  elements++;
  if (elements >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, elements);
}
