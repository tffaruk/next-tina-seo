function generateMetaTags(title, description, image) {
  const metaTags = [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  return metaTags.map((tag, index) => {
    return <meta key={index} {...tag} />;
  });
}

export default generateMetaTags;
