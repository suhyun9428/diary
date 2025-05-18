export const getTodayKey = () => {
  const today = new Date().toISOString().split("T")[0];
  return `translation-limit-${today}`;
};

export const getRequestCount = () => {
  const key = getTodayKey();
  return parseInt(localStorage.getItem(key) || "0", 10);
};

export const incrementRequestCount = () => {
  const key = getTodayKey();
  const current = getRequestCount();
  localStorage.setItem(key, String(current + 1));
};

export const isQuotaExceeded = () => getRequestCount() >= 500;
  