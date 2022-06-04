import Head from "next/head";
import config from "@/site.config";

const generateSchema = (url, title) => ({
  "@context": "http://schema.org",
  "@type": "WebSite",
  url,
  name: title,
  //   alternateName: config.title,
});

type HeaderProps = {
  title?: string;
  /**
   * Relative URL to cover image.
   * Should be inside `/public/` folder.
   */
  coverImage?: string;
};

const Header = ({ title, coverImage }: HeaderProps) => {
  const { author, url, title: defaultTitle, description, keywords } = config;
  const pageTitle = title ? `${title} - ${defaultTitle}` : defaultTitle;
  const schema = generateSchema(url, title);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="image" content={coverImage ?? "/social/opengraph.png"} />

        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>

        {/* Social Meta Tags */}
        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/social/opengraph.png" />
        {/* <meta property="fb:app_id" content={config.fbAppID} /> */}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={config.twitter} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/social/twitter.png" />

        {/* Social icons */}
        <link rel="icon" href="/social/favicon-32x32.png" />
        <link
          rel="apple-touch-icon"
          sizes="48x48"
          href="/social/icon-48x48.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/social/icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="96x96"
          href="/social/icon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/social/icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/social/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="256x256"
          href="/social/icon-256x256.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="384x384"
          href="/social/icon-384x384.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/social/icon-512x512.png"
        />
      </Head>
    </>
  );
};

export default Header;
