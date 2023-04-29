import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Post from "@layouts/components/Post";
import { getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import { slugify } from "@lib/utils/textConverter";
const { blog_folder } = config.settings;

// category page
const Category = ({ category, posts, authors }) => {
  return (
    <Base title={category}>
      <div className="section">
        <div className="container">
          <h1 className="h2 mb-8 text-center">
            Showing posts from <span className="text-primary">{category}</span>{" "}
            category
          </h1>
          <div className="row">
            {posts.map((post, i) => (
              <div key={`key-${i}`} className="col-12 mb-8 sm:col-6">
                <Post post={post} authors={authors} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Category;

// category page routes
export const getStaticPaths = () => {
  const allCategories = getTaxonomy(`content/${blog_folder}`, "categories");

  const paths = allCategories.map((category) => ({
    params: {
      category: category,
    },
  }));

  return { paths, fallback: false };
};

// category page data
export const getStaticProps = ({ params }) => {
  const posts = getSinglePage(`content/${blog_folder}`);
  const filterPosts = posts.filter((post) =>
    post.frontmatter.categories.find((category) =>
      slugify(category).includes(params.category)
    )
  );
  const authors = getSinglePage("content/authors");

  return {
    props: { posts: filterPosts, category: params.category, authors: authors },
  };
};
