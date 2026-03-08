export interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
  exchangeRate: number; // Rate against INR
  locale: string;
}

export const currencies: Record<string, CurrencyConfig> = {
  INR: {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
    exchangeRate: 1,
    locale: "en-IN"
  },
  USD: {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    exchangeRate: 0.012,
    locale: "en-US"
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    name: "Euro",
    exchangeRate: 0.011,
    locale: "en-DE"
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    name: "British Pound",
    exchangeRate: 0.0095,
    locale: "en-GB"
  },
  AED: {
    code: "AED",
    symbol: "د.إ",
    name: "UAE Dirham",
    exchangeRate: 0.044,
    locale: "en-AE"
  },
  SGD: {
    code: "SGD",
    symbol: "S$",
    name: "Singapore Dollar",
    exchangeRate: 0.016,
    locale: "en-SG"
  },
  CAD: {
    code: "CAD",
    symbol: "C$",
    name: "Canadian Dollar",
    exchangeRate: 0.016,
    locale: "en-CA"
  },
  AUD: {
    code: "AUD",
    symbol: "A$",
    name: "Australian Dollar",
    exchangeRate: 0.018,
    locale: "en-AU"
  }
};

// Country to currency mapping
export const countryCurrencyMap: Record<string, string> = {
  IN: "INR",
  US: "USD",
  GB: "GBP",
  CA: "CAD",
  AU: "AUD",
  SG: "SGD",
  AE: "AED",
  // European countries
  DE: "EUR",
  FR: "EUR",
  IT: "EUR",
  ES: "EUR",
  NL: "EUR",
  BE: "EUR",
  AT: "EUR",
  PT: "EUR",
  IE: "EUR",
  FI: "EUR",
  SE: "EUR",
  DK: "EUR",
  // Default
  DEFAULT: "USD"
};

export const formatPrice = (
  priceInr: number,
  countryCode: string = "IN",
  options: {
    showSymbol?: boolean;
    decimals?: number;
    compact?: boolean;
  } = {}
): string => {
  const { showSymbol = true, decimals = 0, compact = false } = options;
  
  const currencyCode = countryCurrencyMap[countryCode] || countryCurrencyMap.DEFAULT;
  const currency = currencies[currencyCode];
  
  const convertedPrice = Math.round(priceInr * currency.exchangeRate);
  
  if (compact && convertedPrice >= 100000) {
    const compactPrice = (convertedPrice / 100000).toFixed(1);
    return showSymbol 
      ? `${currency.symbol}${compactPrice}L` 
      : `${compactPrice}L`;
  }
  
  if (compact && convertedPrice >= 1000) {
    const compactPrice = (convertedPrice / 1000).toFixed(1);
    return showSymbol 
      ? `${currency.symbol}${compactPrice}K` 
      : `${compactPrice}K`;
  }
  
  const formatter = new Intl.NumberFormat(currency.locale, {
    style: showSymbol ? "currency" : "decimal",
    currency: currencyCode,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  
  return formatter.format(convertedPrice);
};

export const formatPriceRange = (
  minInr: number,
  maxInr: number,
  countryCode: string = "IN",
  options: {
    showSymbol?: boolean;
    decimals?: number;
  } = {}
): string => {
  const { showSymbol = true, decimals = 0 } = options;
  
  const minFormatted = formatPrice(minInr, countryCode, { showSymbol, decimals });
  const maxFormatted = formatPrice(maxInr, countryCode, { 
    showSymbol: false, 
    decimals 
  });
  
  // Extract symbol from minFormatted if showing symbol
  if (showSymbol) {
    const currencyCode = countryCurrencyMap[countryCode] || countryCurrencyMap.DEFAULT;
    const currency = currencies[currencyCode];
    return `${currency.symbol}${minFormatted.replace(currency.symbol, '')} - ${maxFormatted}`;
  }
  
  return `${minFormatted} - ${maxFormatted}`;
};

export const getCurrencySymbol = (countryCode: string = "IN"): string => {
  const currencyCode = countryCurrencyMap[countryCode] || countryCurrencyMap.DEFAULT;
  return currencies[currencyCode].symbol;
};

// Detect country from browser
export const detectCountry = async (): Promise<string> => {
  try {
    // Try to get from browser geolocation
    if (navigator.geolocation) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          () => {
            // If we get permission, we'll use timezone as fallback
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            // Simple timezone-based detection
            if (timezone.includes("Kolkata") || timezone.includes("India")) {
              resolve("IN");
            } else if (timezone.includes("London")) {
              resolve("GB");
            } else if (timezone.includes("New_York") || timezone.includes("Los_Angeles")) {
              resolve("US");
            } else if (timezone.includes("Dubai")) {
              resolve("AE");
            } else if (timezone.includes("Singapore")) {
              resolve("SG");
            } else {
              resolve("US");
            }
          },
          () => {
            // On error, default to India
            resolve("IN");
          },
          { timeout: 5000 }
        );
      });
    }
    
    // Fallback to timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone.includes("Kolkata") || timezone.includes("India")) {
      return "IN";
    }
    
    return "IN"; // Default to India
  } catch {
    return "IN";
  }
};

// Hook for using currency
export const useCurrency = (defaultCountry: string = "IN") => {
  const [countryCode, setCountryCode] = useState(defaultCountry);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    detectCountry().then((code) => {
      setCountryCode(code);
      setIsLoading(false);
    });
  }, []);

  const format = (priceInr: number, options?: Parameters<typeof formatPrice>[2]) => {
    return formatPrice(priceInr, countryCode, options);
  };

  const formatRange = (minInr: number, maxInr: number, options?: Parameters<typeof formatPriceRange>[3]) => {
    return formatPriceRange(minInr, maxInr, countryCode, options);
  };

  const symbol = getCurrencySymbol(countryCode);

  return {
    countryCode,
    currencyCode: countryCurrencyMap[countryCode] || countryCurrencyMap.DEFAULT,
    symbol,
    format,
    formatRange,
    isLoading
  };
};

import { useState, useEffect } from "react";
