import { useGeolocation, getCurrencyCode } from "@/hooks/useGeolocation";

interface LocalizedPriceProps {
  price: number;
  className?: string;
  showSymbol?: boolean;
  decimals?: number;
  compact?: boolean;
}

const currencySymbols: Record<string, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
  AED: "د.إ",
  SGD: "S$",
  CAD: "C$",
  AUD: "A$"
};

// Exchange rates (1 INR = X currency)
const exchangeRates: Record<string, number> = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
  GBP: 0.0095,
  AED: 0.044,
  SGD: 0.016,
  CAD: 0.016,
  AUD: 0.018
};

const LocalizedPrice = ({
  price,
  className = "",
  showSymbol = true,
  decimals = 0,
  compact = false
}: LocalizedPriceProps) => {
  const { countryCode, isLoading } = useGeolocation("IN");

  if (isLoading) {
    return <span className={`${className} animate-pulse`}>₹---</span>;
  }

  const currencyCode = getCurrencyCode(countryCode);
  const exchangeRate = exchangeRates[currencyCode] || exchangeRates.INR;
  const symbol = currencySymbols[currencyCode] || "₹";

  const convertedPrice = Math.round(price * exchangeRate);

  // Format compact (K/L) for large numbers
  if (compact && convertedPrice >= 100000) {
    const lakhs = (convertedPrice / 100000).toFixed(1);
    return (
      <span className={className}>
        {showSymbol && symbol}
        {lakhs}L
      </span>
    );
  }

  if (compact && convertedPrice >= 1000) {
    const thousands = (convertedPrice / 1000).toFixed(1);
    return (
      <span className={className}>
        {showSymbol && symbol}
        {thousands}K
      </span>
    );
  }

  // Format with locale
  const localeMap: Record<string, string> = {
    INR: "en-IN",
    USD: "en-US",
    EUR: "en-DE",
    GBP: "en-GB",
    AED: "en-AE",
    SGD: "en-SG",
    CAD: "en-CA",
    AUD: "en-AU"
  };

  const locale = localeMap[currencyCode] || "en-IN";

  const formatter = new Intl.NumberFormat(locale, {
    style: showSymbol ? "currency" : "decimal",
    currency: currencyCode,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  return <span className={className}>{formatter.format(convertedPrice)}</span>;
};

// Component for price ranges
interface LocalizedPriceRangeProps {
  min: number;
  max: number;
  className?: string;
  showSymbol?: boolean;
  decimals?: number;
}

export const LocalizedPriceRange = ({
  min,
  max,
  className = "",
  showSymbol = true,
  decimals = 0
}: LocalizedPriceRangeProps) => {
  const { countryCode, isLoading } = useGeolocation("IN");

  if (isLoading) {
    return <span className={`${className} animate-pulse`}>₹--- - ---</span>;
  }

  const currencyCode = getCurrencyCode(countryCode);
  const exchangeRate = exchangeRates[currencyCode] || exchangeRates.INR;
  const symbol = currencySymbols[currencyCode] || "₹";

  const convertedMin = Math.round(min * exchangeRate);
  const convertedMax = Math.round(max * exchangeRate);

  const localeMap: Record<string, string> = {
    INR: "en-IN",
    USD: "en-US",
    EUR: "en-DE",
    GBP: "en-GB",
    AED: "en-AE",
    SGD: "en-SG",
    CAD: "en-CA",
    AUD: "en-AU"
  };

  const locale = localeMap[currencyCode] || "en-IN";

  const formatter = new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  return (
    <span className={className}>
      {showSymbol && symbol}
      {formatter.format(convertedMin)} - {formatter.format(convertedMax)}
    </span>
  );
};

export default LocalizedPrice;
