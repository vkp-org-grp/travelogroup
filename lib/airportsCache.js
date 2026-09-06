let cache;

export function loadAirports() {
  if (!cache) {
    cache = fetch('/data/airports.json').then((res) => res.json());
  }
  return cache;
}
