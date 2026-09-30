export type CurrencyCode = "PKR" | "USD";

let currentCurrency: CurrencyCode = "USD";
const listeners = new Set<() => void>();

function getInitialCurrency(): CurrencyCode {
  if (typeof window === "undefined") {
    return "USD";
  }

  try {
    const saved = localStorage.getItem("atcdl_currency");
    if (saved === "PKR" || saved === "USD") {
      return saved;
    }
  } catch {
    // Ignore storage errors in private browsing
  }

  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone && (timeZone === "Asia/Karachi" || timeZone.toLowerCase().includes("karachi"))) {
      return "PKR";
    }
  } catch {
    // Fallback
  }

  return "USD";
}

// Initialize on client
if (typeof window !== "undefined") {
  currentCurrency = getInitialCurrency();
}

export function subscribeCurrency(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function getCurrencySnapshot(): CurrencyCode {
  return currentCurrency;
}

export function getCurrencyServerSnapshot(): CurrencyCode {
  return "USD";
}

export function setCurrency(curr: CurrencyCode) {
  currentCurrency = curr;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("atcdl_currency", curr);
    } catch {
      // Ignore
    }
  }
  listeners.forEach((listener) => listener());
}
