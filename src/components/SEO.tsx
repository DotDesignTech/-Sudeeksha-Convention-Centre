import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const BASE_URL = "https://www.sudeekshaconventioncentre.com";
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;

const SEO = ({ title, description, canonical, ogImage = DEFAULT_IMAGE }: SEOProps) => {
  const fullTitle = `${title} | Sudeeksha Convention Centre`;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  useEffect(() => {
    document.title = fullTitle;
    const set = (sel: string, attr: string, val: string) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    set("meta[name='description']", "content", description);
    set("link[rel='canonical']", "href", url);
    set("meta[property='og:title']", "content", fullTitle);
    set("meta[property='og:description']", "content", description);
    set("meta[property='og:url']", "content", url);
    set("meta[property='og:image']", "content", ogImage);
    set("meta[name='twitter:title']", "content", fullTitle);
    set("meta[name='twitter:description']", "content", description);
    set("meta[name='twitter:image']", "content", ogImage);
  }, [fullTitle, description, url, ogImage]);

  return null;
};

export default SEO;
