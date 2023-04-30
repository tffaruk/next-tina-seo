import Head from "next/head";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import React from "react";

const NextTinaSeo = ({
  title,
  meta_title,
  meta_author,
  meta_image,
  description,
  image,
  noindex,
  canonical,
  base_url,
}) => {
  const router = useRouter();
  return (
    <Head>
      {/* title */}
      <title>{meta_title ? meta_title : title}</title>

      {/* canonical url */}
      {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

      {/* noindex robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* meta-description */}
      <meta name="description" content={description} />

      {/* author from config.json */}
      <meta name="author" content={meta_author} />

      {/* og-title */}
      <meta property="og:title" content={meta_title ? meta_title : title} />

      {/* og-description */}
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${base_url}/${router?.asPath.replace("/", "")}`}
      />

      {/* twitter-title */}
      <meta name="twitter:title" content={meta_title ? meta_title : title} />

      {/* twitter-description */}
      <meta name="twitter:description" content={description} />

      {/* og-image */}
      <meta
        property="og:image"
        content={`${base_url}${image ? image : meta_image}`}
      />

      {/* twitter-image */}
      <meta
        name="twitter:image"
        content={`${base_url}${image ? image : meta_image}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default NextTinaSeo;
