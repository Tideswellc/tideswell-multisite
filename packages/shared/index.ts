export type Deal = {
  id: string;
  title: string;
  image: string;
  merchant: string;
  url: string;
  price: number;
  originalPrice?: number;
  discountPct?: number;
  category?: string;
  siteKey?: string;
};

export type SiteConfig = {
  key: string;
  name: string;
  domain?: string;
  colors: { primary: string; background: string; text: string; accent?: string };
  logoText: string;
  tagline?: string;
  brandFilters?: string[];
  social: { x?: boolean; instagram?: boolean; tiktok?: boolean; youtube?: boolean; facebook?: boolean };
};
