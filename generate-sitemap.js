const { SitemapStream, streamToPromise } = require("sitemap");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/nosotros", changefreq: "weekly", priority: 0.8 },
  { url: "/eventos", changefreq: "monthly", priority: 0.7 },
  { url: "/galeria", changefreq: "monthly", priority: 0.7 },
  { url: "/testimonios", changefreq: "monthly", priority: 0.7 },
  { url: "/contacto", changefreq: "monthly", priority: 0.7 }
];

const stream = new SitemapStream({hostname: "https://ministerio-rohi.vercel.app"})
streamToPromise(
    links.reduce((acc, link) => {
        stream.write(link);
        return acc;
    }, stream.end())
).then((data) => {
    createWriteStream(".dist/sitemap.xml").write(data);
});
