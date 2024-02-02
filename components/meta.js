import Head from "next/head";
import { useRouter } from "next/router";

// サイトに関する情報
import { siteMeta } from "lib/constants";
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta;

// 汎用OGP画像
import siteImg from "image/ogp.jpg";

export default function Meta({
  pagetitle,
  pageDesc,
  pageImg,
  pageImgW,
  pageImgH,
}) {
  // ページのタイトル
  const title = pagetitle ? `${pagetitle} | ${siteTitle}` : siteTitle;

  // ページの説明
  const desc = pageDesc ?? siteDesc;

  // ページのURL
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;

  // OGP画像
  const img = pageImg || siteImg.src;
  const imgW = pageImgW || siteImg.width;
  const imgH = pageImgH || siteImg.height;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />

      <meta property="og:image" content={img} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
