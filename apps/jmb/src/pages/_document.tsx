import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import logo from "../../public/assets/images/socialx300.png";
import { GA_TRACKING_ID } from "../utils/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Jarman Building Services Ltd.",
            "image": "https://jbs-ltd.uk${logo}",
            "@id": "",
            "url": "https://jbs-ltd.uk",
            "telephone": "07931344504",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "52 Fairford Avenue",
                "addressLocality": "Bexleyheath",
                "postalCode": "DA7 6QW",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.4688847,
                "longitude": 0.1692829
            }  
            }`,
          }}
        />
      </Html>
    );
  }
}

export default MyDocument;
