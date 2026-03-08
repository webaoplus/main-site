import { useState, useEffect } from "react";

interface GeolocationState {
  countryCode: string;
  isLoading: boolean;
  error: string | null;
}

// Country to currency mapping
const countryCurrencyMap: Record<string, string> = {
  IN: "INR",
  US: "USD",
  GB: "GBP",
  CA: "CAD",
  AU: "AUD",
  SG: "SGD",
  AE: "AED",
  DE: "EUR",
  FR: "EUR",
  IT: "EUR",
  ES: "EUR",
  NL: "EUR",
  DEFAULT: "USD"
};

// Detect country from timezone
const detectCountryFromTimezone = (): string => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // India
    if (timezone.includes("Kolkata") || timezone.includes("India") || timezone.includes("Colombo") || timezone.includes("Karachi")) {
      return "IN";
    }
    
    // US
    if (timezone.includes("New_York") || timezone.includes("Los_Angeles") || 
        timezone.includes("Chicago") || timezone.includes("Denver") || 
        timezone.includes("America/")) {
      return "US";
    }
    
    // UK
    if (timezone.includes("London") || timezone.includes("Europe/London")) {
      return "GB";
    }
    
    // UAE
    if (timezone.includes("Dubai") || timezone.includes("Abu_Dhabi")) {
      return "AE";
    }
    
    // Singapore
    if (timezone.includes("Singapore")) {
      return "SG";
    }
    
    // Canada
    if (timezone.includes("Toronto") || timezone.includes("Vancouver") || timezone.includes("Canada")) {
      return "CA";
    }
    
    // Australia
    if (timezone.includes("Sydney") || timezone.includes("Melbourne") || timezone.includes("Australia")) {
      return "AU";
    }
    
    // European countries
    if (timezone.includes("Berlin") || timezone.includes("Paris") || 
        timezone.includes("Rome") || timezone.includes("Madrid") ||
        timezone.includes("Amsterdam") || timezone.includes("Europe/")) {
      return "DE"; // Default to Germany for EU
    }
    
    return "IN"; // Default to India
  } catch {
    return "IN";
  }
};

// Fetch country from IP API
const fetchCountryFromIP = async (): Promise<string> => {
  try {
    const response = await fetch("https://ipapi.co/json/", {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch location");
    }
    
    const data = await response.json();
    return data.country_code || "IN";
  } catch (error) {
    console.warn("IP geolocation failed, using timezone fallback:", error);
    return detectCountryFromTimezone();
  }
};

export const useGeolocation = (defaultCountry: string = "IN"): GeolocationState => {
  const [state, setState] = useState<GeolocationState>({
    countryCode: defaultCountry,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    const detectLocation = async () => {
      try {
        // First try IP-based detection
        const countryCode = await fetchCountryFromIP();
        
        if (isMounted) {
          setState({
            countryCode,
            isLoading: false,
            error: null
          });
        }
      } catch (error) {
        // Fallback to timezone detection
        const countryCode = detectCountryFromTimezone();
        
        if (isMounted) {
          setState({
            countryCode,
            isLoading: false,
            error: null
          });
        }
      }
    };

    detectLocation();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
};

export const getCurrencyCode = (countryCode: string): string => {
  return countryCurrencyMap[countryCode] || countryCurrencyMap.DEFAULT;
};

export default useGeolocation;
