const ATTRIBUTION_KEYS = [
  { queryKey: "cmp", storageKey: "param" },
  { queryKey: "gclid", storageKey: "gclid" },
  { queryKey: "fclid", storageKey: "fclid" },
  { queryKey: "mclid", storageKey: "mclid" },
];

function normalizeQuery(query = {}) {
  return Object.keys(query).reduce((acc, key) => {
    if (typeof query[key] === "undefined" || query[key] === null) {
      return acc;
    }
    acc[key.toLowerCase()] = query[key];
    return acc;
  }, {});
}

export function persistAttributionParams(routeQuery = {}) {
  if (typeof window === "undefined" || !routeQuery) {
    return;
  }

  const normalizedQuery = normalizeQuery(routeQuery);
  ATTRIBUTION_KEYS.forEach(({ queryKey, storageKey }) => {
    const value = normalizedQuery[queryKey];
    if (typeof value === "string" && value.trim() !== "") {
      localStorage.setItem(storageKey, value);
    }
  });
}

export function readAttributionParam(storageKey) {
  if (typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(storageKey) || "";
}
