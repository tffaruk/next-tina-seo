import NextTinaSeo from "@layouts/NextTinaSeo";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
const { blog_folder } = config.settings;

const Home = ({ banner, posts, authors }) => {


  return (
    <Base>
    <NextTinaSeo title="this is title" />
      <div className="section">
        <div className="container">
          {markdownify(banner.title, "h1", "h2 mb-8 text-center")}
          <div className="row">

          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const authors = getSinglePage("content/authors");

  return {
    props: {
      banner: banner,
      posts: posts,
      authors: authors,
    },
  };
};
