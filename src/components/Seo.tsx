import { useEffect } from "react";

const SITE = "https://aaryasurveillance.com";
const OG_IMAGE = `${SITE}/og-image.png`;

interface Props {
  title: string;
  description: string;
  /** Route path, e.g. "/repair". Used for the canonical URL. */
  path: string;
  /** Optional extra JSON-LD injected for this page only. */
  jsonLd?: Record<string, unknown>;
}

/** Sets or creates a <meta> tag by name or property. */
const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const Seo = ({ title, description, path, jsonLd }: Props) => {
  useEffect(() => {
    const url = `${SITE}${path === "/" ? "" : path}`;

    document.title = title;

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", OG_IMAGE);

    // Canonical
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    // Page-scoped JSON-LD — removed on unmount so routes don't accumulate schema.
    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoPage = "true";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      if (script) document.head.removeChild(script);
    };
  }, [title, description, path, jsonLd]);

  return null;
};

export default Seo;
