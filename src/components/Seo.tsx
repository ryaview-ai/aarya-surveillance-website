import { Head } from "vite-react-ssg";

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

/**
 * Per-route document head, rendered via vite-react-ssg's <Head> (React Helmet).
 * Unlike the previous useEffect version, these tags are emitted into the
 * prerendered static HTML at build time, so crawlers see them without running JS.
 */
const Seo = ({ title, description, path, jsonLd }: Props) => {
  const url = `${SITE}${path === "/" ? "" : path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  );
};

export default Seo;
