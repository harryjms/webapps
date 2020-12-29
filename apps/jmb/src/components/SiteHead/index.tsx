import Head from "next/head";
import { useMemo } from "react";

import socialImage from "../../../public/assets/images/socialx300.png";
interface Props {
  title?: string;
}
const SiteHead: React.FC<Props> = ({ title }) => {
  const siteTitle = useMemo(
    () =>
      title
        ? `${title} - ${process.env.SITE_TITLE}`
        : `${process.env.SITE_TITLE} - Loft and Chalet conversions`,
    [title]
  );
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta property="og:title" content={siteTitle} />
      <meta property="og:image" content={socialImage} />
    </Head>
  );
};

export default SiteHead;
